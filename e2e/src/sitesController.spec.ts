import { SitesController } from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from './config';

describe('SitesController', () => {
  test('should get site data throw configured client when SiteController read a site', async () => {
    const client = createClient();
    const sitesController = new SitesController(client);
    const response = await sitesController.readSite();
    const expectedSite = {
      id: 86562,
      name: 'Typescript SDK',
      subdomain: 'ts-sdk',
      currency: 'USD',
      brighton_v1_enabled: false,
      sellerId: 56887,
      nonPrimaryCurrencies: ['EUR', 'GBP'],
      relationshipInvoicingEnabled: true,
      customerHierarchyEnabled: false,
      whopaysEnabled: false,
      whopaysDefaultPayer: 'self-ungrouped',
      allocationSettings: {
        accrueCharge: 'true',
        upgradeCharge: 'prorated',
        downgradeCredit: 'none',
      },
      defaultPaymentCollectionMethod: 'automatic',
      organizationAddress: {
        street: 'Asdf Street',
        line2: '123/444',
        city: 'San Antonio',
        state: 'TX',
        zip: '78015',
        country: 'US',
        name: 'Root Testing RUIC',
        phone: '555 111 222',
      },
      taxConfiguration: {
        kind: 'custom',
        destinationAddress: 'shipping_then_billing',
        fullyConfigured: false,
      },
      netTerms: {
        defaultNetTerms: 0,
        automaticNetTerms: 0,
        remittanceNetTerms: 0,
        netTermsOnRemittanceSignupsEnabled: false,
        customNetTermsEnabled: false,
      },
      test: true,
    };

    expect(response.statusCode).toBe(200);
    expect(response.result.site).toEqual(expectedSite);
  });

  test('should throw an 401 error when the auth credentials has invalid values', async () => {
    const client = createInvalidClient();
    const sitesController = new SitesController(client);
    expect(sitesController.readSite).rejects.toThrow();
  });
});
