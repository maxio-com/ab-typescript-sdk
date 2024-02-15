import { CONFIG, createClient } from './config';
import {
  Environment,
  BillingPortalController,
  CustomersController,
  Customer,
  CustomerResponse,
} from 'advanced-billing-sdk';

describe('Billing Portal Controller', () => {
  let validCustomer: Customer;
  let enabledCustomerIdPForBillingPortal: number;
  const perPage = 10000;

  const validClient = createClient();
  const validCustomerBody = {
    customer: {
      firstName: 'Martha',
      lastName: 'Washington',
      email: 'martha@example.com',
      ccEmails: 'george@example.com',
    },
  };
  const validSecondCustomerBody = {
    customer: {
      firstName: 'George',
      lastName: 'Washington',
      email: 'george@example.com',
      ccEmails: 'martha@example.com',
    },
  };
  const invalidClient = createClient({
    timeout: 0,
    domain: CONFIG.DOMAIN,
    environment: Environment.Production,
    subdomain: CONFIG.SUBDOMAIN,
    basicAuthUserName: 'invalidKey',
    basicAuthPassword: CONFIG.PASSWORD,
  });
  const invalidCustomerId = -1;
  const nonExistentCustomerId = 1;

  const customersController = new CustomersController(validClient);
  const billingPortalController = new BillingPortalController(validClient);
  const invalidBillingPortalController = new BillingPortalController(
    invalidClient
  );

  beforeAll(async () => {
    validCustomer = (
      await customersController.createCustomer(validCustomerBody)
    ).result.customer;
    const {
      result: { customer },
    } = await billingPortalController.enableBillingPortalForCustomer(
      validCustomer.id || 0
    );
    enabledCustomerIdPForBillingPortal = customer.id || 0;
  });

  describe('Enable Billing Portal for Customer', () => {
    test('should get a billing portal enabled for the customer', async () => {
      const {
        result: { customer },
      } = await customersController.createCustomer(validSecondCustomerBody);
      const customerIDs = (
        await customersController.listCustomers({ perPage })
      ).result.map((value: CustomerResponse) => value.customer.id);
      const existentCustomerID = customer.id || 0;
      expect(existentCustomerID).not.toBe(0);
      expect(customerIDs.includes(existentCustomerID)).toBeTruthy();
      const { statusCode } =
        await billingPortalController.enableBillingPortalForCustomer(
          existentCustomerID
        );
      expect(statusCode).toBe(200);
    });

    test('should thrown an error when enabled billing portal with invalid customer ID', async () => {
      const promise =
        billingPortalController.enableBillingPortalForCustomer(
          invalidCustomerId
        );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });

    test('should thrown an error when enabled billing portal with unauthorized client', async () => {
      const promise =
        invalidBillingPortalController.enableBillingPortalForCustomer(
          Number(validCustomer.id)
        );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should thrown an error when enabled billing portal with non-existent customer ID', async () => {
      const customerIDs = (
        await customersController.listCustomers({})
      ).result.map((value: CustomerResponse) => value.customer.id);
      expect(customerIDs.includes(nonExistentCustomerId)).toBeFalsy();
      const promise = billingPortalController.enableBillingPortalForCustomer(
        nonExistentCustomerId
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
  });

  describe('Read Billing Portal Management Link', () => {
    test('should read a valid management link retrieval', async () => {
      const customerIDs = (
        await customersController.listCustomers({ perPage })
      ).result.map((value: CustomerResponse) => value.customer.id);
      expect(enabledCustomerIdPForBillingPortal).not.toBe(0);
      expect(
        customerIDs.includes(enabledCustomerIdPForBillingPortal)
      ).toBeTruthy();
      const { statusCode } =
        await billingPortalController.readBillingPortalLink(
          enabledCustomerIdPForBillingPortal
        );
      expect(statusCode).toBe(200);
    });

    test('should thrown an error when read billing portal with invalid customer ID', async () => {
      const promise =
        billingPortalController.readBillingPortalLink(invalidCustomerId);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });

    test('should thrown an error when read billing portal with unauthorized client', async () => {
      const promise = invalidBillingPortalController.readBillingPortalLink(
        enabledCustomerIdPForBillingPortal
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should thrown an error when read billing portal with non-existent customer ID', async () => {
      const customerIDs = (
        await customersController.listCustomers({})
      ).result.map((value: CustomerResponse) => value.customer.id);
      expect(customerIDs.includes(nonExistentCustomerId)).toBeFalsy();
      const promise = billingPortalController.readBillingPortalLink(
        nonExistentCustomerId
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
  });

  describe('Resend Billing Portal Invitation', () => {
    test('should resending a billing portal invitation', async () => {
      const customerIDs = (
        await customersController.listCustomers({ perPage })
      ).result.map((value: CustomerResponse) => value.customer.id);
      expect(enabledCustomerIdPForBillingPortal).not.toBe(0);
      expect(
        customerIDs.includes(enabledCustomerIdPForBillingPortal)
      ).toBeTruthy();
      const { statusCode } =
        await billingPortalController.resendBillingPortalInvitation(
          enabledCustomerIdPForBillingPortal
        );
      expect(statusCode).toBe(200);
    });

    test('should thrown an error when resend billing portal invitation with invalid customer ID', async () => {
      const promise =
        billingPortalController.resendBillingPortalInvitation(
          invalidCustomerId
        );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });

    test('should thrown an error when resend billing portal invitation with unauthorized client', async () => {
      const promise =
        invalidBillingPortalController.resendBillingPortalInvitation(
          enabledCustomerIdPForBillingPortal
        );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should thrown an error when resend billing portal invitation with non-existent customer ID', async () => {
      const customerIDs = (
        await customersController.listCustomers({})
      ).result.map((value: CustomerResponse) => value.customer.id);
      expect(customerIDs.includes(nonExistentCustomerId)).toBeFalsy();
      const promise = billingPortalController.resendBillingPortalInvitation(
        nonExistentCustomerId
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
  });

  describe('Revoke Billing Portal Invitation for Customer', () => {
    test('should revoke a billing portal invitation:', async () => {
      const customerIDs = (
        await customersController.listCustomers({ perPage })
      ).result.map((value: CustomerResponse) => value.customer.id);
      expect(enabledCustomerIdPForBillingPortal).not.toBe(0);
      expect(
        customerIDs.includes(enabledCustomerIdPForBillingPortal)
      ).toBeTruthy();
      const response = await billingPortalController.revokeBillingPortalAccess(
        enabledCustomerIdPForBillingPortal
      );
      expect(response.statusCode).toBe(200);
    });

    test('should thrown an error when revoke billing portal invitation with invalid customer ID', async () => {
      const promise =
        billingPortalController.revokeBillingPortalAccess(invalidCustomerId);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });

    test('should thrown an error when revoke billing portal invitation with unauthorized client', async () => {
      const promise = invalidBillingPortalController.revokeBillingPortalAccess(
        enabledCustomerIdPForBillingPortal
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should thrown an error when revoke billing portal invitation with non-existent customer ID', async () => {
      const customerIDs = (
        await customersController.listCustomers({})
      ).result.map((value: CustomerResponse) => value.customer.id);
      expect(customerIDs.includes(nonExistentCustomerId)).toBeFalsy();
      const promise = billingPortalController.revokeBillingPortalAccess(
        nonExistentCustomerId
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
  });
});
