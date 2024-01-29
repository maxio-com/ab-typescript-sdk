import { createClient } from '../config';

import { CustomersController } from 'advanced-billing-sdk';

export async function createCustomer() {
  const validClient = createClient();
  const customersController = new CustomersController(validClient);
  const {
    result: { customer },
  } = await customersController.createCustomer({
    customer: {
      firstName: 'Martha',
      lastName: 'Washington',
      email: 'martha@example.com',
      ccEmails: 'george@example.com',
    },
  });
  return customer;
}
