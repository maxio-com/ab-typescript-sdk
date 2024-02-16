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

  describe('Create Proforma Invoices', () => {
    test('should create a valid proforma invoice', async () => {
      const subscriptionId = subscriptionResponse?.subscription?.id;

      const createResponse =
        await proformaInvoicesController.createProformaInvoice(
          subscriptionId || 0
        );
      expect(createResponse.statusCode).toBe(201);
      expect(createResponse.result.subscriptionId).toBe(subscriptionId);
    });

    test('should throw a 404 error when the user sends invalid subscription_id', async () => {
      const promise = proformaInvoicesController.createProformaInvoice(0);
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
  });

  describe('Read Proforma Invoices', () => {
    test('should read a valid proforma invoice', async () => {
      const subscriptionId = subscriptionResponse?.subscription?.id;

      const createResponse =
        await proformaInvoicesController.createProformaInvoice(
          subscriptionId || 0
        );

      const proformaUid = createResponse.result.uid;
      const readResponse = await proformaInvoicesController.readProformaInvoice(
        proformaUid || ''
      );
      expect(readResponse.statusCode).toBe(200);
      expect(readResponse.result.uid).toBe(proformaUid);
    });

    test('should throw a 404 error when the user sends a non-existent proforma invoice UID', async () => {
      const promise = proformaInvoicesController.readProformaInvoice('test');
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
  });

  describe('List Proforma invoices', () => {
    test('should list proforma invoices when user sends valid subscriptionId', async () => {
      const subscriptionId = subscriptionResponse?.subscription?.id;
      await proformaInvoicesController.createProformaInvoice(
        subscriptionId || 0
      );
      const listResponse =
        await proformaInvoicesController.listProformaInvoices({
          subscriptionId: subscriptionId || 0,
        });
      const proformaInvoicesLength =
        listResponse?.result?.proformaInvoices?.length || 0;
      expect(listResponse.statusCode).toBe(200);
      expect(proformaInvoicesLength >= 1).toBeTruthy();
    });

    test('should throw a 404 error when the request body is missing', async () => {
      const subscriptionId = subscriptionResponse?.subscription?.id;
      await proformaInvoicesController.createProformaInvoice(
        subscriptionId || 0
      );
      const promise = proformaInvoicesController.listProformaInvoices({
        subscriptionId: 0,
      });
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
  });
});
