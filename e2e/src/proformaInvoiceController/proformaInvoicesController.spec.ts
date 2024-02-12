import { ProformaInvoicesController } from 'advanced-billing-sdk';
import { createClient } from '../config';
import { createSubscription } from '../utils/subscription';

describe('Proforma Invoices Controller', () => {
  let proformaInvoicesController: ProformaInvoicesController;

  beforeAll(async () => {
    const client = createClient();
    proformaInvoicesController = new ProformaInvoicesController(client);
  });

  describe('Create Proforma Invoices', () => {
    test('should create a valid proforma invoice', async () => {
      const subsResponse = await createSubscription({
        productFamilyName: 'scenario-01-proforma',
        productHandle: 'scenario-01-proforma-handler',
        customerReference: 'scenario-01-proforma-reference',
      });

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;

      const createResponse =
        await proformaInvoicesController.createProformaInvoice(
          subscriptId || 0
        );
      expect(createResponse.statusCode).toBe(201);
      expect(createResponse.result.subscriptionId).toBe(subscriptId);
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
      const subsResponse = await createSubscription({
        productFamilyName: 'scenario-02-read-proforma',
        productHandle: 'scenario-02-read-proforma-handler',
        customerReference: 'scenario-02-read-proforma-reference',
      });

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;

      const createResponse =
        await proformaInvoicesController.createProformaInvoice(
          subscriptId || 0
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
      const subsResponse = await createSubscription({
        productFamilyName: 'scenario-04-list-proforma',
        productHandle: 'scenario-04-list-proforma-handler',
        customerReference: 'scenario-04-list-proforma-reference',
      });

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;
      await proformaInvoicesController.createProformaInvoice(subscriptId || 0);
      const listResponse =
        await proformaInvoicesController.listProformaInvoices({
          subscriptionId: subscriptId || 0,
        });
      const proformaInvoicesLength =
        listResponse?.result?.proformaInvoices?.length || 0;
      expect(listResponse.statusCode).toBe(200);
      expect(proformaInvoicesLength >= 1).toBeTruthy();
    });

    test('should throw a 404 error when the request body is missing', async () => {
      const subsResponse = await createSubscription({
        productFamilyName: 'scenario-05-list-proforma',
        productHandle: 'scenario-05-list-proforma-handler',
        customerReference: 'scenario-05-list-proforma-reference',
      });

      const subscriptId = subsResponse.subscriptionResponse?.subscription?.id;
      await proformaInvoicesController.createProformaInvoice(subscriptId || 0);
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
