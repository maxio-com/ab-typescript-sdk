import {
  CompoundingStrategy,
  CouponsController,
  ProductFamiliesController,
  ProductFamily,
  SubscriptionsController,
  ProductsController,
} from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from './config';
import { product } from './mocks/products';
import { createMockSubscription } from './mocks/subscriptions';
import { uid } from 'uid';

const couponBody = {
  coupon: {
    name: '15% off',
    code: '15OFF',
    description: '15% off for life',
    percentage: 15,
    allowNegativeBalance: false,
    recurring: false,
    endDate: '2024-08-29T12:00:00-04:00',
    productFamilyId: '0',
    stackable: true,
    compoundingStrategy: CompoundingStrategy.Compound,
    excludeMidPeriodAllocations: true,
    applyOnCancelAtEndOfPeriod: true,
  },
  restricted_products: {
    '1': true,
  },
  restricted_components: {
    '1': true,
    '2': false,
  },
};

describe('Coupons Controller', () => {
  let productFamily: ProductFamily | null;
  let couponsController: CouponsController;
  let invalidCouponsController: CouponsController;
  let subscriptionsController: SubscriptionsController;
  let productsController: ProductsController;

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createInvalidClient();
    couponsController = new CouponsController(client);
    subscriptionsController = new SubscriptionsController(client);
    productsController = new ProductsController(client);
    invalidCouponsController = new CouponsController(invalidClient);
    const productFamiliesController = new ProductFamiliesController(client);
    productFamily =
      (
        await productFamiliesController.createProductFamily({
          productFamily: {
            name: `coupons-product-family-${uid()}`,
            description: 'coupons product family a',
          },
        })
      ).result.productFamily || null;
  });

  describe('Create Coupon', () => {
    test('should create a coupon correctly when user sends a correct user id', async () => {
      const createReponse = await couponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            ...couponBody.coupon,
            code: 'CREATE001',
            productFamilyId: String(productFamily?.id),
          },
        }
      );
      expect(createReponse.statusCode).toBe(201);
      expect(createReponse.result.coupon?.name).toBe('15% off');
    });

    test('should throw an 422 error when user sends invalid data to the coupon creation', async () => {
      const promise = couponsController.createCoupon(productFamily?.id || 0, {
        coupon: {
          ...couponBody.coupon,
          productFamilyId: String(productFamily?.id),
          name: '',
          code: '',
        },
      });
      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(422);
        expect(reason.result.errors).toEqual([
          'Name: cannot be blank.',
          'Code: cannot be blank.',
        ]);
      });
    });

    test('should throw and 404 error when user sends incorrect family id ', async () => {
      const promise = couponsController.createCoupon(2001, {
        coupon: {
          ...couponBody.coupon,
          productFamilyId: String(productFamily?.id),
        },
      });

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw and 401 error when user sends incorrect credentials in the create endpoint ', async () => {
      const promise = invalidCouponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            ...couponBody.coupon,
            productFamilyId: String(productFamily?.id),
          },
        }
      );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('List Coupons From Product Family', () => {
    test('should list all the coupons from a product Family', async () => {
      const listResponse = await couponsController.listCouponsForProductFamily({
        productFamilyId: productFamily?.id || 0,
      });
      expect(listResponse.statusCode).toBe(200);
      expect(listResponse.result.length >= 1).toBeTruthy();
    });

    test('should throw and 404 error when user sends incorrect family id ', async () => {
      const promise = couponsController.listCouponsForProductFamily({
        productFamilyId: 2001,
      });

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw and 401 error when user sends incorrect credentials in the list endpoint ', async () => {
      const promise = invalidCouponsController.listCouponsForProductFamily({
        productFamilyId: productFamily?.id || 0,
      });
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Find Coupon', () => {
    test('should find a coupon when the user sends coupon code', async () => {
      await couponsController.createCoupon(productFamily?.id || 0, {
        coupon: {
          ...couponBody.coupon,
          code: 'FIND01',
          productFamilyId: String(productFamily?.id),
        },
      });
      const response = await couponsController.findCoupon(
        productFamily?.id || 0,
        'FIND01'
      );
      expect(response.statusCode).toBe(200);
      expect(response.result.coupon?.name).toBe('15% off');
      expect(response.result.coupon?.description).toBe('15% off for life');
      expect(response.result.coupon?.code).toBe('FIND01');
    });

    test('should throw and 404 error when user sends incorrect product code', async () => {
      const promise = couponsController.findCoupon(
        productFamily?.id || 0,
        'invalid'
      );

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw and 404 error when user sends incorrect family id ', async () => {
      const promise = couponsController.findCoupon(299, '15OFF');

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
    test('should throw and 401 error when user sends incorrect credentials to find a coupon by code', async () => {
      const promise = invalidCouponsController.findCoupon(
        productFamily?.id || 0,
        '15OFF'
      );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Read Coupon', () => {
    test('should read an already created coupon', async () => {
      const createReponse = await couponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            ...couponBody.coupon,
            productFamilyId: String(productFamily?.id),
            code: '15%OFFLINE',
          },
        }
      );
      const couponId = createReponse.result.coupon?.id || 0;
      const readResponse = await couponsController.readCoupon(
        productFamily?.id || 0,
        couponId
      );

      expect(readResponse.statusCode).toBe(200);
      expect(readResponse.result.coupon?.id).toBe(couponId);
    });

    test('should throw and 404 error when user sends coupon id', async () => {
      const promise = couponsController.readCoupon(productFamily?.id || 0, 1);

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw and 401 error when user sends invalid credentials', async () => {
      const promise = invalidCouponsController.readCoupon(
        productFamily?.id || 0,
        1
      );

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Update Coupon', () => {
    test('should update a coupon when user sends the correct data', async () => {
      const createReponse = await couponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            ...couponBody.coupon,
            code: 'UPDATE01',
            productFamilyId: String(productFamily?.id),
          },
        }
      );
      const couponId = createReponse.result.coupon?.id || 0;
      const payload = {
        name: '15% off',
        description: '15% off for life',
        percentage: 15,
        allowNegativeBalance: false,
        recurring: false,
        endDate: '2024-08-29T12:00:00-04:00',
        productFamilyId: '0',
        stackable: true,
        compoundingStrategy: CompoundingStrategy.Compound,
        excludeMidPeriodAllocations: true,
        applyOnCancelAtEndOfPeriod: true,
      };

      const code = 'UPDATED' + Date.now();
      const updateResponse = await couponsController.updateCoupon(
        productFamily?.id || 0,
        couponId,
        {
          coupon: {
            ...payload,
            code,
            name: 'updated name',
            description: 'updated description',
          },
        }
      );

      expect(updateResponse.statusCode).toBe(200);
      expect(updateResponse.result.coupon?.code).toBe(code);
      expect(updateResponse.result.coupon?.name).toBe('updated name');
      expect(updateResponse.result.coupon?.description).toBe(
        'updated description'
      );
    });

    test('should throw and 401 error when user sends invalid credentials', async () => {
      const createReponse = await couponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            ...couponBody.coupon,
            productFamilyId: String(productFamily?.id),
          },
        }
      );
      const couponId = createReponse.result.coupon?.id || 0;

      const promise = invalidCouponsController.updateCoupon(
        productFamily?.id || 0,
        couponId,
        {
          coupon: {
            ...couponBody.coupon,
            code: 'UPDATED' + Date.now(),
            name: 'updated name',
            description: 'updated description',
          },
        }
      );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Archive Coupon', () => {
    test('should delete an existing coupon when user sends a valid coupon id', async () => {
      const createReponse = await couponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            ...couponBody.coupon,
            code: 'ARCHIVE01',
            productFamilyId: String(productFamily?.id),
          },
        }
      );
      const couponId = createReponse.result.coupon?.id || 0;
      const deleteResponse = await couponsController.archiveCoupon(
        productFamily?.id || 0,
        couponId
      );

      const readResponse = await couponsController.readCoupon(
        productFamily?.id || 0,
        couponId
      );

      expect(deleteResponse.statusCode).toBe(200);
      expect(deleteResponse.result.coupon?.id).toBe(couponId);
      expect(readResponse.result.coupon?.archivedAt).not.toBe(null);
    });

    test('should throw and 404 error when user sends incorrect coupon id', async () => {
      const promise = couponsController.archiveCoupon(
        productFamily?.id || 0,
        1
      );

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw and 401 error when user sends invalid credentials', async () => {
      const promise = invalidCouponsController.archiveCoupon(
        productFamily?.id || 0,
        1
      );

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('List all Coupons', () => {
    test('should list all the coupons', async () => {
      await couponsController.createCoupon(productFamily?.id || 0, {
        coupon: {
          ...couponBody.coupon,
          code: 'LIST002',
          productFamilyId: String(productFamily?.id),
        },
      });
      const listResponse = await couponsController.listCoupons({
        page: 1,
      });

      expect(listResponse.statusCode).toBe(200);
      expect(listResponse.result.length >= 1).toBeTruthy();
    });

    test('should throw and 401 error when user sends invalid credentials', async () => {
      const promise = invalidCouponsController.listCoupons({ page: 1 });

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('List Coupon Usages', () => {
    test('should list the usages coupons ', async () => {
      const handle = `${uid()}-coupon-handler`;
      const productResponse = await productsController.createProduct(
        productFamily?.id || 0,
        {
          product: { ...product, handle },
        }
      );

      const subscriptionBody = createMockSubscription({
        productHandle: handle,
        customerReference: uid(),
      });

      const subscriptionResponse = (
        await subscriptionsController.createSubscription({
          subscription: subscriptionBody,
        })
      ).result;

      const createReponse = await couponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            ...couponBody.coupon,
            code: 'TEST1',
            productFamilyId: String(productFamily?.id),
          },
        }
      );
      await subscriptionsController.applyCouponsToSubscription(
        subscriptionResponse?.subscription?.id || 0,
        'TEST1'
      );

      const couponId = createReponse.result.coupon?.id || 0;
      const listResponse = await couponsController.readCouponUsage(
        productFamily?.id || 0,
        couponId
      );

      expect(listResponse.statusCode).toBe(200);
      expect(listResponse.result[0].name).toBe(
        productResponse.result.product.name
      );
    });

    test('should throw and 404 error when user sends invalid code id', async () => {
      const promise = couponsController.readCouponUsage(
        productFamily?.id || 0,
        1
      );

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw and 401 error when user sends invalid credentials', async () => {
      const createReponse = await couponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            ...couponBody.coupon,
            code: 'LIST01',
            productFamilyId: String(productFamily?.id),
          },
        }
      );

      const couponId = createReponse.result.coupon?.id || 0;
      const promise = invalidCouponsController.readCouponUsage(
        productFamily?.id || 0,
        couponId
      );

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Validate Coupon', () => {
    test('should validate a coupon when user sends a correct id', async () => {
      const createReponse = await couponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            ...couponBody.coupon,
            code: 'VALIDATE01',
            productFamilyId: String(productFamily?.id),
          },
        }
      );
      const couponCode = createReponse.result.coupon?.code;
      const validateResponse = await couponsController.validateCoupon(
        couponCode || '',
        productFamily?.id
      );

      expect(validateResponse.statusCode).toBe(200);
      expect(validateResponse.result.coupon?.code).toBe(couponCode);
    });

    test('should throw and 404 error when the user sends incorrect coupon code', async () => {
      const promise = couponsController.validateCoupon('FRTE21');

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
  });

  describe('Create/Update Currency Prices', () => {
    test('should create a valid currency price', async () => {
      const createReponse = await couponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            name: 'CREATE-UPDATE',
            code: 'CREATEUPDATE01',
            description: '15% off for life',
            allowNegativeBalance: false,
            recurring: false,
            endDate: '2024-08-29T12:00:00-04:00',
            productFamilyId: '0',
            stackable: true,
            compoundingStrategy: CompoundingStrategy.Compound,
            excludeMidPeriodAllocations: true,
            applyOnCancelAtEndOfPeriod: true,
            amountInCents: BigInt(1000),
          },
        }
      );
      const couponId = createReponse.result.coupon?.id || 0;

      const updateResponse =
        await couponsController.createOrUpdateCouponCurrencyPrices(couponId, {
          currencyPrices: [
            {
              currency: 'EUR',
              price: 10,
            },
          ],
        });

      expect(updateResponse.statusCode).toBe(200);
    });

    test('should throw and 401 error when the user sends invalid credentials', async () => {
      const promise =
        invalidCouponsController.createOrUpdateCouponCurrencyPrices(200, {
          currencyPrices: [
            {
              currency: 'BS',
              price: 100,
            },
          ],
        });

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });

    test('should throw and 422 error when the user sends invalid or missing parameters in the PUT request', async () => {
      const createReponse = await couponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            ...couponBody.coupon,
            code: 'test0002',
            productFamilyId: String(productFamily?.id),
          },
        }
      );
      const couponId = createReponse.result.coupon?.id || 0;
      const promise = couponsController.createOrUpdateCouponCurrencyPrices(
        couponId,
        {
          currencyPrices: [
            {
              currency: 'test',
              price: 0,
            },
          ],
        }
      );

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(422);
      });
    });
  });
});
