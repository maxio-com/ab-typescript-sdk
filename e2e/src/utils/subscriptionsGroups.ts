import {
  CustomersController,
  PaymentProfilesController,
  PaymentType,
  SubscriptionComponentsController,
  SubscriptionGroupsController,
} from 'advanced-billing-sdk';
import { createClient } from '../config';

import createProduct from './products';
import { createComponent } from './components';

export async function signUpSubscriptionGroup() {
  const client = createClient();
  const subscriptionGroupsController = new SubscriptionGroupsController(client);
  const subscriptionsComponentsController =
    new SubscriptionComponentsController(client);

  const { productResponse, productFamilyResponse } = await createProduct({});
  const product = productResponse.product;
  const componentResponse = await createComponent({
    productFamilyId: productFamilyResponse?.productFamily?.id || 0,
  });

  const customersController = new CustomersController(client);
  const paymentProfilesController = new PaymentProfilesController(client);
  const body = {
    customer: {
      firstName: 'Martha',
      lastName: 'Perez',
      email: 'martha@example.com',
    },
  };
  const customerResponse = (await customersController.createCustomer(body))
    .result;

  const { customer } = customerResponse;

  const {
    result: { paymentProfile },
  } = await paymentProfilesController.createPaymentProfile({
    paymentProfile: {
      customerId: customer.id,
      bankName: 'Royal Bank of France',
      bankAccountNumber: '0000001',
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
            components: [
              {
                componentId: componentResponse?.component.id,
              },
            ],
            primary: true,
            productHandle: product.handle || '',
            couponCodes: [],
          },
        ],
      },
    })
  ).result;

  const subscriptionId = subscriptionGroupsSignedResponse.primarySubscriptionId;
  const usageResponse = await subscriptionsComponentsController.createUsage(
    subscriptionId || 0,
    componentResponse?.component.id || 0,
    {
      usage: {
        quantity: 1,
        memo: 'memo test',
      },
    }
  );

  return {
    customerResponse,
    subscriptionGroupsSignedResponse,
    productResponse,
    usageResponse,
    componentResponse,
  };
}
