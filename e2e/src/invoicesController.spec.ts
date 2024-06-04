import { InvoicesController, InvoiceEventType } from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from './config';
import { createSubscription } from './utils/subscription';
import { waitForSeconds } from './utils';

describe('Invoices Controller', () => {
  let invoicesController: InvoicesController;
  let invalidInvoiceController: InvoicesController;

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createInvalidClient();
    invoicesController = new InvoicesController(client);
    invalidInvoiceController = new InvoicesController(invalidClient);
  });

  describe('Valid Advance Invoice Issuance', () => {
    test('should create a valid advance invoice issuance', async () => {
      const subsResponse = await createSubscription({});

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;

      const createResponse = await invoicesController.createInvoice(
        subscriptId || 0,
        {
          invoice: {
            lineItems: [
              {
                title: 'A Product',
                quantity: 12,
                unitPrice: '150.00',
              },
            ],
          },
        }
      );
      expect(createResponse.statusCode).toBe(201);
      expect(createResponse.result.invoice.subscriptionId).toBe(subscriptId);
    });

    test('should throw a 422 error when the user sends invalid or missing parameters in the request body', async () => {
      const subsResponse = await createSubscription({});

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;

      const promise = invoicesController.createInvoice(subscriptId || 0);

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(422);
        expect(reason.result.errors).toEqual({ invoice: "can't be blank" });
      });
    });

    test('should throw a 401 error when the user sends incorrect credentials', async () => {
      const subsResponse = await createSubscription({});

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;

      const promise = invalidInvoiceController.createInvoice(subscriptId || 0);
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Read Advance Invoice', () => {
    test('should read a valid advance invoice retrieval', async () => {
      const subsResponse = await createSubscription({});

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;

      const createResponse = await invoicesController.createInvoice(
        subscriptId || 0,
        {
          invoice: {
            lineItems: [
              {
                title: 'A Product',
                quantity: 12,
                unitPrice: '150.00',
              },
            ],
          },
        }
      );

      const invoiceUid = createResponse.result.invoice.uid;
      const readResponse = await invoicesController.readInvoice(
        invoiceUid || ''
      );
      expect(readResponse.statusCode).toBe(200);
      expect(readResponse.result.uid).toBe(invoiceUid);
    });

    test('should throw a 404 error when the user sends a non-existent invoice UID', async () => {
      const promise = invoicesController.readInvoice('');
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw a 401 error when the user sends incorrect credentials', async () => {
      const subsResponse = await createSubscription({});

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;

      const createResponse = await invoicesController.createInvoice(
        subscriptId || 0,
        {
          invoice: {
            lineItems: [
              {
                title: 'A Product',
                quantity: 12,
                unitPrice: '150.00',
              },
            ],
          },
        }
      );

      const invoiceUid = createResponse.result.invoice.uid;
      const promise = invalidInvoiceController.readInvoice(invoiceUid || '');
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Void Advance Invoice', () => {
    test('should void a valid advance invoice issuance', async () => {
      const subsResponse = await createSubscription({});

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;

      const createResponse = await invoicesController.createInvoice(
        subscriptId || 0,
        {
          invoice: {
            lineItems: [
              {
                title: 'A Product',
                quantity: 12,
                unitPrice: '150.00',
              },
            ],
          },
        }
      );
      const invoiceUid = createResponse.result.invoice.uid;
      const voidResponse = await invoicesController.voidInvoice(
        invoiceUid || '',
        {
          mVoid: {
            reason: 'Duplicate invoice',
          },
        }
      );
      expect(voidResponse.statusCode).toBe(201);
      expect(voidResponse.result.uid).toBe(invoiceUid);
    });

    test('should throw a 422 error when the user sends invalid or missing parameters', async () => {
      const subsResponse = await createSubscription({});

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;

      const createResponse = await invoicesController.createInvoice(
        subscriptId || 0,
        {
          invoice: {
            lineItems: [
              {
                title: 'A Product',
                quantity: 12,
                unitPrice: '150.00',
              },
            ],
          },
        }
      );
      const invoiceUid = createResponse.result.invoice.uid;
      const promise = invoicesController.voidInvoice(invoiceUid || '');
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(422);
      });
    });

    test('should throw a 401 error when the user sends incorrect credentials', async () => {
      const subsResponse = await createSubscription({});

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;

      const createResponse = await invoicesController.createInvoice(
        subscriptId || 0,
        {
          invoice: {
            lineItems: [
              {
                title: 'A Product',
                quantity: 12,
                unitPrice: '150.00',
              },
            ],
          },
        }
      );
      const invoiceUid = createResponse.result.invoice.uid;
      const promise = invalidInvoiceController.voidInvoice(invoiceUid || '', {
        mVoid: {
          reason: 'Duplicate invoice',
        },
      });
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });

    test('should throw a 404 error when the user sends a non-existent invoice UID', async () => {
      const promise = invoicesController.voidInvoice('');
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
  });

  describe('List Invoice Events', () => {
    test('should list invoice events', async () => {
      const subsResponse = await createSubscription({});
      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;
      const createResponse = await invoicesController.createInvoice(
        subscriptId || 0,
        {
          invoice: {
            lineItems: [
              {
                title: 'A Product',
                quantity: 12,
                unitPrice: '150.00',
              },
            ],
          },
        }
      );
      const invoiceUid = createResponse.result.invoice.uid;
      await invoicesController.voidInvoice(
        invoiceUid || '',
        {
          mVoid: {
            reason: 'Duplicate invoice',
          },
        }
      );

      await waitForSeconds(3);
      const invoiceEventsResponse = await invoicesController.listInvoiceEvents(
        {
          invoiceUid: invoiceUid
        }
      );
      expect(invoiceEventsResponse.statusCode).toBe(200);
      expect(invoiceEventsResponse.result.events?.length).toBe(2);
      expect(invoiceEventsResponse.result.events?.[0].eventType).toBe(InvoiceEventType.IssueInvoice);
      expect(invoiceEventsResponse.result.events?.[1].eventType).toBe(InvoiceEventType.VoidInvoice);
    });
  });
});
