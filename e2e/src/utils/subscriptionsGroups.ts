import {
  CustomersController,
  PaymentProfilesController,
  PaymentType,
  SubscriptionGroupsController,
} from 'advanced-billing-sdk';
import { createClient } from '../config';

import createProduct from './products';

export async function signUpSubscriptionGroup() {
  const client = createClient();
  const subscriptionGroupsController = new SubscriptionGroupsController(client);

  const { productResponse } = await createProduct({});
  const product = productResponse.product;

  const customersController = new CustomersController(client);
  const paymentProfilesController = new PaymentProfilesController(client);
  const body = {
    customer: {
      firstName: 'Martha',
      lastName: 'Perez',
      email: 'martha@example.com',
    },
  };
  const {
    result: { customer },
  } = await customersController.createCustomer(body);

  const {
    result: { paymentProfile },
  } = await paymentProfilesController.createPaymentProfile({
    paymentProfile: {
      customerId: customer.id,
      bankName: 'Royal Bank of France',
      bankAccountNumber: '0000000',
      bankRoutingNumber: '0003',
      bankBranchCode: '00006',
      paymentType: PaymentType.BankAccount,
      billingAddress: '20 Place de la Gare',
      billingCity: 'Colombes',
      billingState: 'Île-de-France',
      billingZip: '92700',
      billingCountry: 'FR',
    },
  });

  const subscriptionGroupsSignedResponse = (
    await subscriptionGroupsController.signupWithSubscriptionGroup({
      subscriptionGroup: {
        payerId: customer.id,
        paymentProfileId: paymentProfile.id,

        subscriptions: [
          {
            primary: true,
            productHandle: product.handle || '',
            couponCodes: [],
          },
        ],
      },
    })
  ).result;

  return {
    subscriptionGroupsSignedResponse,
    product,
  };
}
