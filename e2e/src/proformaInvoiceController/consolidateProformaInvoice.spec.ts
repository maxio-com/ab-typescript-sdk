import { ProformaInvoicesController } from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from '../config';
import { signUpSubscriptionGroup } from '../utils/subscriptionsGroups';
import { waitForSeconds } from '../utils';

describe('Proforma Invoices Controller', () => {
  let proformaInvoicesController: ProformaInvoicesController;
  let invalidProformaInvoicesController: ProformaInvoicesController;

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createInvalidClient();
    proformaInvoicesController = new ProformaInvoicesController(client);
    invalidProformaInvoicesController = new ProformaInvoicesController(
      invalidClient
    );
  });

  describe('Create Consolidate Proforma Invoice', () => {
    test('should create consolidate proforma invoice with a success status code', async () => {
      const { subscriptionGroupsSignedResponse } =
        await signUpSubscriptionGroup();
      const uid = subscriptionGroupsSignedResponse.uid || '';
      const response =
        await proformaInvoicesController.createConsolidatedProformaInvoice(uid);
      expect(response.statusCode).toBe(201);
    });

    test('should throw 404 error when create consolidate proforma invoice with an invalid uid', async () => {
      const promise =
        proformaInvoicesController.createConsolidatedProformaInvoice('invalid');
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw 401 error when create consolidate proforma invoice with an invalid client', async () => {
      const promise =
        invalidProformaInvoicesController.createConsolidatedProformaInvoice(
          'invalid'
        );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('List Subscription Group Proforma Invoices', () => {
    test('should list subscription group proforma invoices already created for the subscription group', async () => {
      const { subscriptionGroupsSignedResponse, customerResponse } =
        await signUpSubscriptionGroup();
      const uid = subscriptionGroupsSignedResponse.uid || '';
      await proformaInvoicesController.createConsolidatedProformaInvoice(uid);

      // required to wait async creation on the service
      await waitForSeconds(5);

      const listResponse =
        await proformaInvoicesController.listSubscriptionGroupProformaInvoices(
          {uid: uid}
        );

      const [proformaInvoice] = listResponse.result.proformaInvoices || [];
      expect(listResponse.statusCode).toBe(200);
      expect(listResponse.result.proformaInvoices?.length).toBeGreaterThan(0);
      expect(proformaInvoice.siteId).toBe(4511);
      expect(proformaInvoice.customerId).toBe(customerResponse.customer.id);
    });

    test('should throw 404 when listSubscriptionGroupProformaInvoices with an invalid uid', async () => {
      const promise =
        proformaInvoicesController.listSubscriptionGroupProformaInvoices(
          {uid: 'invalid'}
        );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw 404 when listSubscriptionGroupProformaInvoices with an invalid client', async () => {
      const promise =
        invalidProformaInvoicesController.listSubscriptionGroupProformaInvoices(
          {uid: 'invalid'}
        );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
});
