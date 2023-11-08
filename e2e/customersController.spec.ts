import { createClient } from './config';
import { CustomersController } from '../src/controllers/customersController';
import { CustomerResponse } from '../src/models/customerResponse';

describe('CustomersController', () => {
  describe('Create customer', () => {
    test('should create a customer given the correct payload body', async () => {
      const client = createClient();
      const customersController = new CustomersController(client);
      const body = {
        customer: {
          firstName: 'Martha',
          lastName: 'Washington',
          email: 'martha@example.com',
        },
      };
      const response = await customersController.createCustomer(body);
      expect(response.statusCode).toBe(201);
      expect(response.result.customer).toEqual(
        expect.objectContaining(body.customer)
      );
    });

    test('should throw errors when required parameters was not sent to the body payload', async () => {
      const client = createClient();
      const customersController = new CustomersController(client);
      const body = {
        customer: {
          firstName: '',
          lastName: '',
          email: '',
        },
      };
      const promise = customersController.createCustomer(body);
      expect(promise).rejects.toThrow();
      const expectedErrors = [
        'First name: cannot be blank.',
        'Last name: cannot be blank.',
        'Email address: cannot be blank.',
      ];
      await promise.catch((response) => {
        expect(response.result.errors).toEqual(expectedErrors);
        expect(response.statusCode).toEqual(422);
      });
    });

    test('should throw error when the user try to create a customer with the same reference value', async () => {
      const client = createClient();
      const customersController = new CustomersController(client);
      const body = {
        customer: {
          firstName: 'Pedro',
          lastName: 'Lopez',
          email: 'pedro@example.com',
          ccEmails: 'pedro@example.com',
          organization: 'ABC, Inc.',
          reference: '1033',
          address: '123 Main Street',
          address2: 'Unit 10',
          city: 'Anytown',
          state: 'MA',
          zip: '02120',
          country: 'US',
          phone: '555-555-1212',
          locale: 'es-MX',
        },
      };

      const bodyWithTheSameReference = {
        customer: {
          firstName: 'Juan',
          lastName: 'Lopez',
          email: 'Juan@example.com',
          ccEmails: 'Juan@example.com',
          organization: 'ABC, Inc.',
          reference: '1033',
          address: '123 Main Street',
          address2: 'Unit 10',
          city: 'Anytown',
          state: 'MA',
          zip: '02120',
          country: 'US',
          phone: '555-555-1212',
          locale: 'es-MX',
        },
      };
      const response = await customersController.createCustomer(body);
      expect(response.statusCode).toBe(201);
      const promise = customersController.createCustomer(
        bodyWithTheSameReference
      );
      expect(promise).rejects.toThrow();
      const expectedErrors = [
        'Reference: must be unique - that value has been taken.',
      ];
      await promise.catch((response) => {
        expect(response.result.errors).toEqual(expectedErrors);
        expect(response.statusCode).toEqual(422);
      });
    });
  });

  describe('List/Find customer', () => {
    beforeAll(async () => {
      const client = createClient();
      const customersController = new CustomersController(client);
      const customers = [
        {
          firstName: 'Ferdinand',
          lastName: 'Lopez',
          email: 'fernando@example.com',
          organization: 'ABC, Inc.',
          reference: '10001',
        },
        {
          firstName: 'Fernando',
          lastName: 'Pedregal',
          email: 'nando@example.com',
          organization: 'Holand, Inc.',
          reference: '10002',
        },
        {
          firstName: 'Solivan',
          lastName: 'Medrano',
          email: 'soli@example.com',
          organization: 'ABC, Inc.',
          reference: '10003',
        },
        {
          firstName: 'Edward',
          lastName: 'Kalua',
          email: 'kalua@example.com',
          organization: 'CPD, inc',
          reference: '10004',
        },
        {
          firstName: 'Miguel',
          lastName: 'Santos',
          email: 'santos@example.com',
          organization: 'CPD, inc',
          reference: '10005',
        },
        {
          firstName: 'Henrique',
          lastName: 'Figeroa',
          email: 'figeroa@example.com',
          organization: 'CPD, inc',
          reference: '10006',
        },
      ];

      const promises = customers.map((customer) => {
        return customersController.createCustomer({ customer });
      });
      await Promise.all(promises);
    });

    test('should get all customers list when the user send empty query criteria', async () => {
      const client = createClient();
      const customersController = new CustomersController(client);
      const response = await customersController.listCustomers({});
      const responseEmails = response.result
        .map((value: CustomerResponse) => value.customer.email)
        .sort();
      expect(response.result.length >= 6).toBeTruthy();
      expect(responseEmails.includes('fernando@example.com')).toBeTruthy();
      expect(responseEmails.includes('figeroa@example.com')).toBeTruthy();
      expect(responseEmails.includes('kalua@example.com')).toBeTruthy();
      expect(responseEmails.includes('nando@example.com')).toBeTruthy();
    });

    test('should get filtered customers list when the user send a query criteria', async () => {
      const client = createClient();
      const customersController = new CustomersController(client);
      const response = await customersController.listCustomers({ q: 'nando' });
      const responseEmails = response.result
        .map((value: CustomerResponse) => value.customer.email)
        .sort();
      expect(response.result.length).toBe(2);
      expect(responseEmails).toEqual([
        'fernando@example.com',
        'nando@example.com',
      ]);
    });

    test('should get empty customers list when the user query criteria was not found in data', async () => {
      const client = createClient();
      const customersController = new CustomersController(client);
      const response = await customersController.listCustomers({
        q: 'invalid-criteria',
      });
      expect(response.result.length).toBe(0);
    });

    test('should get customers list based on organization criteria when the user query criteria search by ABC organization', async () => {
      const client = createClient();
      const customersController = new CustomersController(client);
      const response = await customersController.listCustomers({ q: 'ABC' });
      expect(response.result.length >= 2).toBeTruthy();
      const responseEmails = response.result
        .map((value: CustomerResponse) => value.customer.email)
        .sort();
      expect(responseEmails.includes('fernando@example.com')).toBeTruthy();
      expect(responseEmails.includes('soli@example.com')).toBeTruthy();
    });

    test('should get customers list based on reference application criteria when the user search by reference', async () => {
      const client = createClient();
      const customersController = new CustomersController(client);
      const response = await customersController.listCustomers({ q: '10001' });
      expect(response.result.length).toBe(1);
      const responseEmails = response.result.map(
        (value: CustomerResponse) => value.customer.email
      );
      expect(responseEmails).toEqual(['fernando@example.com']);
    });

    test('should get customers list based on page size of 5 when the user gets the first page', async () => {
      const client = createClient();
      const customersController = new CustomersController(client);
      const firstPageResponse = await customersController.listCustomers({
        page: 1,
        perPage: 5,
      });
      const secondPageResponse = await customersController.listCustomers({
        page: 2,
        perPage: 5,
      });
      expect(firstPageResponse.result.length).toBe(5);
      expect(secondPageResponse.result.length > 1).toBeTruthy();
    });
  });
});
