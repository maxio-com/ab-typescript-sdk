import {
    ResumptionCharge,
    SubscriptionStatusController,
  } from 'advanced-billing-sdk';
  import { createClient, createInvalidClient } from './config';
  import {
    createContextForMigration,
    MigrationContext,
  } from './utils/subscriptionsProductsController';
  
  describe('Subscriptions Status Controller', () => {
    let context: MigrationContext = {
      productFamilyResponse: null,
      productResponse01: null,
      productResponse02: null,
      subscriptionResponse: null,
    };
    let subscriptionStatusController: SubscriptionStatusController;
    let invalidSubscriptionStatusController: SubscriptionStatusController;
    beforeAll(async () => {
      const client = createClient();
      const invalidClient = createInvalidClient();
      subscriptionStatusController = new SubscriptionStatusController(client);
      invalidSubscriptionStatusController = new SubscriptionStatusController(
        invalidClient
      );
      context = await createContextForMigration();
    });
  
    describe('Status subscription', () => {
      describe('Retry status subscription', () => {
        test('should retry a subscription correctly', async () => {
          const idSub = context.subscriptionResponse?.subscription?.id;
          const subscriptionResponse =
            await subscriptionStatusController.retrySubscription(idSub || 0, {});
  
          expect(subscriptionResponse.statusCode).toBe(200);
          expect(subscriptionResponse.result.subscription?.id).toEqual(idSub);
        });
  
        test('should throw an error when user sends invalid subscription id', async () => {
          const idSub = 1001;
          const promise = subscriptionStatusController.retrySubscription(
            idSub || 0,
            {}
          );
  
          expect(promise).rejects.toThrow();
          await promise.catch((reason) => {
            expect(reason.statusCode).toBe(404);
          });
        });
  
        test('should throw an 401 error when user sends valid subscription with invalid credentials', async () => {
          const idSub = context.subscriptionResponse?.subscription?.id;
          const promise = invalidSubscriptionStatusController.retrySubscription(
            idSub || 0,
            {}
          );
  
          expect(promise).rejects.toThrow();
          await promise.catch((reason) => {
            expect(reason.statusCode).toBe(401);
          });
        });
      });
  
      describe('Resume subscription', () => {
        test('should resume a subscription correctly', async () => {
          const idSub = context.subscriptionResponse?.subscription?.id;
          const automaticallyResumeAt = new Date(
            new Date().getTime() + 2 * 24 * 60 * 60 * 1000
          );
          const onHold = await subscriptionStatusController.pauseSubscription(
            idSub || 0,
            {
              hold: {
                automaticallyResumeAt: automaticallyResumeAt.toDateString(),
              },
            }
          );
          expect(onHold?.result?.subscription?.state).toBe('on_hold');
  
          const subscriptionResponse =
            await subscriptionStatusController.resumeSubscription(
              idSub || 0,
              ResumptionCharge.Immediate
            );
          expect(subscriptionResponse.statusCode).toBe(200);
          expect(subscriptionResponse?.result?.subscription?.state).toBe(
            'active'
          );
        });
  
        test('should throw an error when user sends invalid subscription id', async () => {
          const idSub = 1001;
          const promise = subscriptionStatusController.resumeSubscription(
            idSub || 0
          );
  
          expect(promise).rejects.toThrow();
          await promise.catch((reason) => {
            expect(reason.statusCode).toBe(404);
          });
        });
  
        test('should throw an 401 error when user sends valid subscription with invalid credentials', async () => {
          const idSub = context.subscriptionResponse?.subscription?.id;
          const promise = invalidSubscriptionStatusController.resumeSubscription(
            idSub || 0
          );
  
          expect(promise).rejects.toThrow();
          await promise.catch((reason) => {
            expect(reason.statusCode).toBe(401);
          });
        });
      });
  
      describe('Update subscription', () => {
        test('should update a subscription correctly', async () => {
          const idSub = context.subscriptionResponse?.subscription?.id;
          const automaticallyResumeAtTwoDays = new Date(
            new Date().getTime() + 2 * 24 * 60 * 60 * 1000
          );
          await subscriptionStatusController.pauseSubscription(idSub || 0, {
            hold: {
              automaticallyResumeAt: automaticallyResumeAtTwoDays.toDateString(),
            },
          });
  
          const automaticallyResumeAtThreeDays = new Date(
            new Date().getTime() + 3 * 24 * 60 * 60 * 1000
          );
          const subscriptionResponse =
            await subscriptionStatusController.updateAutomaticSubscriptionResumption(
              idSub || 0,
              {
                hold: {
                  automaticallyResumeAt:
                    automaticallyResumeAtThreeDays.toDateString(),
                },
              }
            );
          expect(subscriptionResponse.statusCode).toBe(200);
          expect(subscriptionResponse.result.subscription?.id).toEqual(idSub);
        });
  
        test('should throw an error when user sends invalid subscription id', async () => {
          const idSub = 1001;
          const promise =
            subscriptionStatusController.updateAutomaticSubscriptionResumption(
              idSub || 0
            );
  
          expect(promise).rejects.toThrow();
          await promise.catch((reason) => {
            expect(reason.statusCode).toBe(404);
          });
        });
  
        test('should throw an 401 error when user sends valid subscription with invalid credentials', async () => {
          const idSub = context.subscriptionResponse?.subscription?.id;
          const promise =
            invalidSubscriptionStatusController.updateAutomaticSubscriptionResumption(
              idSub || 0
            );
  
          expect(promise).rejects.toThrow();
          await promise.catch((reason) => {
            expect(reason.statusCode).toBe(401);
          });
        });
      });
  
      describe('Cancel subscription', () => {
        test('should cancel a subscription correctly', async () => {
          const idSub = context.subscriptionResponse?.subscription?.id;
          const cancellationMessage = 'Cancel sub';
          const reasonCode = 'CODE-CANCEL';
          const body = {
            subscription: {
              cancellationMessage,
              reasonCode,
            },
          };
          const subscriptionResponse =
            await subscriptionStatusController.cancelSubscription(
              idSub || 0,
              body
            );
          expect(subscriptionResponse.statusCode).toBe(200);
          expect(
            subscriptionResponse.result.subscription?.cancellationMessage
          ).toEqual(cancellationMessage);
          expect(subscriptionResponse.result.subscription?.reasonCode).toEqual(
            reasonCode
          );
        });
  
        test('should cancel a subscription already canceled', async () => {
          const idSub = context.subscriptionResponse?.subscription?.id;
          const cancellationMessage = 'Cancel sub';
          const reasonCode = 'CODE-CANCEL';
          const body = {
            subscription: {
              cancellationMessage,
              reasonCode,
            },
          };
  
          const promise = subscriptionStatusController.cancelSubscription(
            idSub || 0,
            body
          );
          expect(promise).rejects.toThrow();
          await promise.catch((reason) => {
            expect(reason.statusCode).toBe(422);
          });
        });
  
        test('should throw an error when user sends invalid subscription id', async () => {
          const idSub = 1001;
          const promise = subscriptionStatusController.cancelSubscription(
            idSub || 0
          );
  
          expect(promise).rejects.toThrow();
          await promise.catch((reason) => {
            expect(reason.statusCode).toBe(404);
          });
        });
  
        test('should throw an 401 error when user sends valid subscription with invalid credentials', async () => {
          const idSub = context.subscriptionResponse?.subscription?.id;
          const promise = invalidSubscriptionStatusController.cancelSubscription(
            idSub || 0
          );
  
          expect(promise).rejects.toThrow();
          await promise.catch((reason) => {
            expect(reason.statusCode).toBe(401);
          });
        });
      });
    });
  });
  