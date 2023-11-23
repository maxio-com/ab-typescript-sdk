import { CONFIG, createClient } from './config';
import { SitesController, Environment } from '../../src';

describe('SitesController', () => {
  test('should get site data throw configured client when SiteController read a site', async () => {
    const client = createClient();
    const sitesController = new SitesController(client);
    const response = await sitesController.readSite();
    const expectedSite = {
      id: 4511,
      name: 'Typescript SDK Env',
      subdomain: 'tp-sdk',
      currency: 'USD',
      sellerId: 722159,
      nonPrimaryCurrencies: ['EUR'],
      relationshipInvoicingEnabled: true,
      customerHierarchyEnabled: false,
      whopaysEnabled: false,
      whopaysDefaultPayer: 'self-ungrouped',
      allocationSettings: {
        upgradeCharge: 'prorated',
        downgradeCredit: 'none',
        accrueCharge: true,
      },
      defaultPaymentCollectionMethod: 'automatic',
      organizationAddress: {
        street: 'Asdf Street',
        line2: '123/444',
        city: 'San Antonio',
        state: 'TX',
        zip: '78015',
        country: 'US',
        name: 'Developer Experience',
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
    const client = createClient({
      timeout: 0,
      domain: CONFIG.DOMAIN,
      environment: Environment.Production,
      subdomain: CONFIG.SUBDOMAIN,
      basicAuthUserName: 'invalidKey',
      basicAuthPassword: CONFIG.PASSWORD,
    });
    const sitesController = new SitesController(client);
    expect(sitesController.readSite).rejects.toThrow();
  });
});
