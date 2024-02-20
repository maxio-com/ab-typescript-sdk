import { ProformaInvoicesController } from 'advanced-billing-sdk';
import { createClient } from '../config';
import { signUpSubscriptionGroup } from '../utils/subscriptionsGroups';

describe('Proforma Invoices Controller', () => {
  let proformaInvoicesController: ProformaInvoicesController;

  beforeAll(async () => {
    const client = createClient();
    proformaInvoicesController = new ProformaInvoicesController(client);
  });

  describe('Create Consolidate Proforma Invoice', () => {
    test('should create consolidate proforma invoice', async () => {
      const { subscriptionGroupsSignedResponse } =
        await signUpSubscriptionGroup();
      const uid = subscriptionGroupsSignedResponse.uid || '';
      proformaInvoicesController.createConsolidatedProformaInvoice(uid);
    });
  });

  describe('List Subscription Group Proforma Invoices', () => {
    test('should list subscription group proforma invoices', async () => {
      const { subscriptionGroupsSignedResponse } =
        await signUpSubscriptionGroup();
      const uid = subscriptionGroupsSignedResponse.uid || '';
      proformaInvoicesController.listSubscriptionGroupProformaInvoices(uid);
    });
  });
});
