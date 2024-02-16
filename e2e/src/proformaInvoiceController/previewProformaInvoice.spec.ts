import {
  Environment,
  ProformaInvoicesController,
  SubscriptionResponse,
} from 'advanced-billing-sdk';
import { createClient, CONFIG } from '../config';
import { createSubscription } from '../utils/subscription';

describe('Proforma Invoices Controller', () => {
  let proformaInvoicesController: ProformaInvoicesController;
  let invalidProformaInvoiceController: ProformaInvoicesController;
  let subscriptionResponse: SubscriptionResponse | null;

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
    proformaInvoicesController = new ProformaInvoicesController(client);
    invalidProformaInvoiceController = new ProformaInvoicesController(
      invalidClient
    );
    const subscriptionContext = await createSubscription({});
    subscriptionResponse = subscriptionContext.subscriptionResponse;
  });

  describe('Preview Proforma Invoice', () => {
    test('should preview a proforma invoice', async () => {
      const subscriptionId = subscriptionResponse?.subscription?.id;
      await proformaInvoicesController.createProformaInvoice(
        subscriptionId || 0
      );

      const previewResponse =
        await proformaInvoicesController.previewProformaInvoice(
          subscriptionId || 0
        );
      expect(previewResponse.statusCode).toBe(200);
      expect(previewResponse.result.subscriptionId).toBe(subscriptionId);
    });

    test('should throw a 404 error when the user sends invalid subscription_id', async () => {
      const promise = proformaInvoicesController.previewProformaInvoice(0);
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw a 401 error when the user sends incorrect credentials', async () => {
      const subscriptionId = subscriptionResponse?.subscription?.id;

      const promise = invalidProformaInvoiceController.previewProformaInvoice(
        subscriptionId || 0
      );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
});
