import {
  ProformaInvoicesController,
  SubscriptionResponse,
} from 'advanced-billing-sdk';
import { createClient } from '../config';
import { createSubscription } from '../utils/subscription';

describe('Proforma Invoices Controller', () => {
  let proformaInvoicesController: ProformaInvoicesController;
  let subscriptionResponse: SubscriptionResponse | null;
  beforeAll(async () => {
    const client = createClient();
    proformaInvoicesController = new ProformaInvoicesController(client);
    const subscriptionContext = await createSubscription({});
    subscriptionResponse = subscriptionContext.subscriptionResponse;
  });

  describe('Void Proforma Invoice', () => {
    test('should void a proforma invoice', async () => {
      const subscriptionId = subscriptionResponse?.subscription?.id;

      const createResponse =
        await proformaInvoicesController.createProformaInvoice(
          subscriptionId || 0
        );

      const proformaUid = createResponse.result.uid;
      const voidResponse = await proformaInvoicesController.voidProformaInvoice(
        proformaUid || '',
        {
          mVoid: {
            reason: 'Duplicate proforma invoice',
          },
        }
      );
      expect(voidResponse.statusCode).toBe(201);
      expect(voidResponse.result.uid).toBe(proformaUid);
    });

    test('should throw a 404 error when the user sends a non-existent proforma invoice UID', async () => {
      const promise = proformaInvoicesController.voidProformaInvoice('');
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw a 422 error when the user does not provide reason in the request body.', async () => {
      const subscriptionId = subscriptionResponse?.subscription?.id;

      const createResponse =
        await proformaInvoicesController.createProformaInvoice(
          subscriptionId || 0
        );

      const proformaUid = createResponse.result.uid;
      const promise = proformaInvoicesController.voidProformaInvoice(
        proformaUid || ''
      );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(422);
        expect(reason.result.errors).toEqual({ void: "can't be blank" });
      });
    });
  });
});
