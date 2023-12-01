import { Environment, SubscriptionNotesController } from 'advanced-billing-sdk';
import { CONFIG, createClient } from './config';
import { createSubscription, SubscriptionContext } from './utils/subscription';

describe('Subscription Notes Controller', () => {
  let subscriptionNotesController: SubscriptionNotesController;
  let invalidSubscriptionNotesController: SubscriptionNotesController;

  let subscriptionContext: SubscriptionContext = {
    productFamilyResponse: null,
    subscriptionResponse: null,
    productResponse: null,
  };
  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createClient({
      timeout: 0,
      domain: CONFIG.DOMAIN,
      environment: Environment.Production,
      subdomain: CONFIG.SUBDOMAIN,
      basicAuthUserName: 'invalidKey',
      basicAuthPassword: CONFIG.PASSWORD,
    });
    subscriptionNotesController = new SubscriptionNotesController(client);
    invalidSubscriptionNotesController = new SubscriptionNotesController(
      invalidClient
    );
    subscriptionContext = await createSubscription({
      productFamilyName: 'Notes family',
      productHandle: 'subs-notes-001',
      customerReference: 'notes-001',
    });
  });
  describe('Create subscription note', () => {
    test('should create a note on selected subscription', async () => {
      const noteResponse =
        await subscriptionNotesController.createSubscriptionNote(
          String(subscriptionContext.subscriptionResponse?.subscription?.id),
          {
            note: {
              body: 'note 01',
              sticky: true,
            },
          }
        );

      expect(noteResponse.statusCode).toBe(201);
      expect(noteResponse.result.note).toEqual(
        expect.objectContaining({
          body: 'note 01',
          sticky: true,
        })
      );
    });

    test('should throw 404 error when the user sends invalid id', async () => {
      const promise = subscriptionNotesController.createSubscriptionNote(
        'invalid',
        {
          note: {
            body: 'note 02',
            sticky: true,
          },
        }
      );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw 401 error when the user sends invalid credentials', async () => {
      const promise = invalidSubscriptionNotesController.createSubscriptionNote(
        'invalid',
        {
          note: {
            body: 'note 03',
            sticky: true,
          },
        }
      );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Update subscription note', () => {
    test('should update a note already created', async () => {
      const noteResponse =
        await subscriptionNotesController.createSubscriptionNote(
          String(subscriptionContext.subscriptionResponse?.subscription?.id),
          {
            note: {
              body: 'note 01',
              sticky: true,
            },
          }
        );
      const updateNoteResponse =
        await subscriptionNotesController.updateSubscriptionNote(
          String(subscriptionContext.subscriptionResponse?.subscription?.id),
          String(noteResponse.result.note.id),
          {
            note: {
              body: 'note 01 updated',
              sticky: false,
            },
          }
        );

      expect(updateNoteResponse.statusCode).toBe(201);
      expect(updateNoteResponse.result.note).toEqual(
        expect.objectContaining({
          body: 'note 01 updated',
          sticky: false,
        })
      );
    });

    test('should throw 404 error when the user sends invalid subscription id', async () => {
      const noteResponse =
        await subscriptionNotesController.createSubscriptionNote(
          String(subscriptionContext.subscriptionResponse?.subscription?.id),
          {
            note: {
              body: 'note 02',
              sticky: true,
            },
          }
        );
      const promise = subscriptionNotesController.updateSubscriptionNote(
        'invalid',
        String(noteResponse.result.note.id),
        {
          note: {
            body: 'note 01',
            sticky: true,
          },
        }
      );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw 404 error when the user sends invalid note id', async () => {
      const promise = subscriptionNotesController.updateSubscriptionNote(
        String(subscriptionContext.subscriptionResponse?.subscription?.id),
        'invalid',
        {
          note: {
            body: 'note 01',
            sticky: true,
          },
        }
      );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
    test('should throw 401 error when the user sends invalid credentials', async () => {
      const promise = invalidSubscriptionNotesController.updateSubscriptionNote(
        'invalid',
        'invalid',
        {
          note: {
            body: 'note 01',
            sticky: true,
          },
        }
      );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('List subscription notes', () => {
    test('should list all notes from a subscription', async () => {
      const response = await subscriptionNotesController.listSubscriptionNotes({
        subscriptionId: String(
          subscriptionContext.subscriptionResponse?.subscription?.id
        ),
      });

      expect(response.statusCode).toBe(200);
      expect(response.result.length >= 3).toBeTruthy();
      const notesBodies = response.result.map((response) => response.note.body);
      expect(response.result.length >= 3).toBeTruthy();
      expect(notesBodies).toEqual(['note 02', 'note 01', 'note 01 updated']);
    });

    test('should throw 404 error when user list invalid subscription id', async () => {
      const promise = subscriptionNotesController.listSubscriptionNotes({
        subscriptionId: 'invalid',
      });

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
  });

  describe('Read subscription note', () => {
    test('should read a note from a valid subscription id and note id', async () => {
      const noteResponse =
        await subscriptionNotesController.createSubscriptionNote(
          String(subscriptionContext.subscriptionResponse?.subscription?.id),
          {
            note: {
              body: 'note read',
              sticky: true,
            },
          }
        );
      const response = await subscriptionNotesController.readSubscriptionNote(
        String(subscriptionContext.subscriptionResponse?.subscription?.id),
        String(noteResponse.result.note.id)
      );

      expect(response.result.note).toEqual(
        expect.objectContaining({
          body: 'note read',
          sticky: true,
        })
      );
    });

    test('should throw 404 error when user read invalid subscription id', async () => {
      const promise = subscriptionNotesController.readSubscriptionNote(
        'invalid',
        'invalid'
      );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw 401 error when user read a note with invalid credentials', async () => {
      const promise = invalidSubscriptionNotesController.readSubscriptionNote(
        'invalid',
        'invalid'
      );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Delete subscription note', () => {
    test('should delete a note from the list of subscriptions', async () => {
      try {
        const subscriptionId = String(
          subscriptionContext.subscriptionResponse?.subscription?.id
        );

        const result =
          await subscriptionNotesController.deleteSubscriptionNote(
            subscriptionId
          );

        const notes = (
          await subscriptionNotesController.listSubscriptionNotes({
            subscriptionId,
          })
        ).result;
        console.log(result, notes);
      } catch (reason) {
        console.log(reason);
      }
    });
  });
});
