import {
  BankAccountType,
  CardType,
  PaymentType,
  ProductFamiliesController,
  ProductFamilyResponse,
  ProductsController,
  SubscriptionsController,
  ProductResponse,
  IntervalUnit,
  SubscriptionStateFilter,
} from 'advanced-billing-sdk';
import { createClient } from './config';

describe('Subscriptions Controller', () => {
  let subscriptionsController: SubscriptionsController;
  let productFamilyResponse: ProductFamilyResponse;
  let productResponse01: ProductResponse;
  let productResponse02: ProductResponse;

  const productFamilyBody = {
    productFamily: {
      name: 'subscriptions-engage',
      description: 'Amazing subscriptions-engage',
    },
  };

  const productBody = {
    product: {
      name: 'subscriptions-engage',
      handle: 'basic-subscription',
      description: 'Description print',
      priceInCents: BigInt(1000),
      interval: 1,
      intervalUnit: IntervalUnit.Month,
    },
  };

  const productBody02 = {
    product: {
      name: 'subscriptions-engage02',
      handle: 'basic-subscription-02',
      description: 'Description print',
      priceInCents: BigInt(100),
      interval: 1,
      intervalUnit: IntervalUnit.Month,
    },
  };

  const creditCardAttributes = {
    lastName: 'Smith',
    firstName: 'Joe',
    fullNumber: '4111111111111111',
    expirationYear: 2024,
    expirationMonth: 12,
    cardType: CardType.Visa,
    billingZip: '02120',
    billingState: 'MA',
    billingCountry: 'US',
    billingCity: 'Boston',
    billingAddress2: null,
    billingAddress: '123 Mass Ave.',
  };

  beforeAll(async () => {
    const client = createClient();
    subscriptionsController = new SubscriptionsController(client);
    const productFamiliesController = new ProductFamiliesController(client);
    const productsController = new ProductsController(client);

    productFamilyResponse = (
      await productFamiliesController.createProductFamily(productFamilyBody)
    ).result;
    productResponse01 = (
      await productsController.createProduct(
        productFamilyResponse.productFamily?.id || 0,
        productBody
      )
    ).result;
    productResponse02 = (
      await productsController.createProduct(
        productFamilyResponse.productFamily?.id || 0,
        productBody02
      )
    ).result;
  });

  describe('Create subscription', () => {
    test('should create a subscription with valid credit card attributes', async () => {
      const body = {
        subscription: {
          productHandle: 'basic-subscription',
          customerAttributes: {
            firstName: 'Joe',
            lastName: 'Blow',
            email: 'joe@example.com',
            zip: '02120',
            state: 'MA',
            reference: 'XYZ1',
            phone: '(617) 111 - 0000',
            organization: 'Acme',
            country: 'US',
            city: 'Boston',
            address2: null,
            address: '123 Mass Ave.',
          },
          creditCardAttributes,
        },
      };

      const subscription =
        await subscriptionsController.createSubscription(body);
      expect(subscription.statusCode).toBe(201);
      expect(subscription.result.subscription?.customer).toEqual(
        expect.objectContaining(body.subscription.customerAttributes)
      );
    });

    test('should create a subscription with valid bank account attributes', async () => {
      const body = {
        subscription: {
          productHandle: 'basic-subscription',
          customerAttributes: {
            firstName: 'Joe',
            lastName: 'Blow',
            email: 'joe@example.com',
            zip: '02120',
            state: 'MA',
            reference: 'XYZ',
            phone: '(617) 111 - 0000',
            organization: 'Acme',
            country: 'US',
            city: 'Boston',
            address2: null,
            address: '123 Mass Ave.',
          },
          bankAccountAttributes: {
            bankName: 'Best Bank',
            bankRoutingNumber: '21000089',
            bankAccountNumber: '111111111111',
            bankAccountType: BankAccountType.Checking,
            bankAccountHolderType: 'business',
            paymentType: PaymentType.CreditCard,
          },
          creditCardAttributes,
        },
      };

      const subscription =
        await subscriptionsController.createSubscription(body);
      expect(subscription.statusCode).toBe(201);
      expect(subscription.result.subscription?.customer).toEqual(
        expect.objectContaining(body.subscription.customerAttributes)
      );
    });

    test('should throw an 422 error when a subscription does not have a payment profile', async () => {
      const body = {
        subscription: {
          productHandle: 'basic-subscription',
          customerAttributes: {
            firstName: 'Joe',
            lastName: 'Blow',
            email: 'joe@example.com',
            zip: '02120',
            state: 'MA',
            reference: 'XYZ2',
            phone: '(617) 111 - 0000',
            organization: 'Acme',
            country: 'US',
            city: 'Boston',
            address2: null,
            address: '123 Mass Ave.',
          },
          creditCardAttributes: {},
        },
      };

      const promise = subscriptionsController.createSubscription(body);
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(422);
        expect(error.result.errors).toEqual([
          'Payment profile: cannot be blank.',
        ]);
      });
    });
  });

  describe('List subscriptions', () => {
    test('should list all the subscriptions without parameters', async () => {
      const subscriptionsResponse =
        await subscriptionsController.listSubscriptions({
          product: productResponse01.product.id,
        });
      expect(subscriptionsResponse.result.length >= 2).toBeTruthy();
    });

    test('should list all the subscriptions search by product', async () => {
      const subscriptionsByProduct = [
        {
          subscription: {
            productHandle: 'basic-subscription-02',
            customerAttributes: {
              firstName: 'Joe',
              lastName: 'Blow',
              email: 'joe@example.com',
              zip: '02120',
              state: 'MA',
              reference: 'XYZ4',
              phone: '(617) 111 - 0000',
              organization: 'Acme',
              country: 'US',
              city: 'Boston',
              address2: null,
              address: '123 Mass Ave.',
            },
            creditCardAttributes,
          },
        },
        {
          subscription: {
            productHandle: 'basic-subscription-02',
            customerAttributes: {
              firstName: 'Joe',
              lastName: 'Blow',
              email: 'joe@example.com',
              zip: '02120',
              state: 'MA',
              reference: 'XYZ5',
              phone: '(617) 111 - 0000',
              organization: 'Acme',
              country: 'US',
              city: 'Boston',
              address2: null,
              address: '123 Mass Ave.',
            },
            creditCardAttributes,
          },
        },
      ];

      const promises = subscriptionsByProduct.map((subscription) =>
        subscriptionsController.createSubscription(subscription)
      );
      await Promise.all(promises);
      const subscriptionsResponse =
        await subscriptionsController.listSubscriptions({
          product: productResponse02.product.id,
        });
      expect(subscriptionsResponse.result.length).toBe(2);
    });

    test('should list all by based in an state', async () => {
      const subscriptionsResponse =
        await subscriptionsController.listSubscriptions({
          state: SubscriptionStateFilter.Active,
        });
      expect(subscriptionsResponse.result.length >= 4).toBeTruthy();
    });
  });

  describe('Update subscription', () => {
    test('should update the product credit card when the user sends the correct data', async () => {
      const [subscriptionsResponse] = (
        await subscriptionsController.listSubscriptions({
          product: productResponse02.product.id,
        })
      ).result;

      const updateResponse = await subscriptionsController.updateSubscription(
        subscriptionsResponse.subscription?.id || 0,
        {
          subscription: {
            creditCardAttributes: {
              fullNumber: '374245455400126',
              expirationYear: '2025',
              expirationMonth: '11',
            },
          },
        }
      );
      const updatedCreditCard = updateResponse.result.subscription?.creditCard;
      expect(updatedCreditCard?.expirationMonth).toBe(11);
      expect(updatedCreditCard?.expirationYear).toBe(2025);
    });

    test('should throw an error 422 error when user sends invalid data', async () => {
      const [subscriptionsResponse] = (
        await subscriptionsController.listSubscriptions({
          product: productResponse02.product.id,
        })
      ).result;

      const promise = subscriptionsController.updateSubscription(
        subscriptionsResponse.subscription?.id || 0,
        {
          subscription: {
            creditCardAttributes: {
              fullNumber: '000',
              expirationYear: '2025',
              expirationMonth: '11',
            },
          },
        }
      );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(422);
        expect(reason.result.errors).toEqual([
          'Credit card number: must be a valid credit card number.',
        ]);
      });
    });
  });

  describe('Read subscription', () => {
    test('should read a subscription already exists', async () => {
      const [subscriptionsResponse] = (
        await subscriptionsController.listSubscriptions({
          product: productResponse02.product.id,
        })
      ).result;

      const readResponse = await subscriptionsController.readSubscription(
        subscriptionsResponse.subscription?.id || 0
      );

      expect(readResponse.statusCode).toBe(200);
    });

    test('should throw a 404 error when user try to read a subscription does not exist', async () => {
      const promise = subscriptionsController.readSubscription(2001);
      expect(promise).rejects.toThrowError();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
  });
});
