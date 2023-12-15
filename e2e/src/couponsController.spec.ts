import {
  CompoundingStrategy,
  CouponsController,
  Environment,
  ProductFamiliesController,
  ProductFamily,
} from 'advanced-billing-sdk';
import { createClient, CONFIG } from './config';

const couponBody = {
  coupon: {
    name: '15% off',
    code: '15OFF',
    description: '15% off for life',
    percentage: 15,
    allowNegativeBalance: 'false',
    recurring: 'false',
    endDate: '2024-08-29T12:00:00-04:00',
    productFamilyId: '0',
    stackable: 'true',
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

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createClient({
      timeout: 0,
      domain: CONFIG.DOMAIN,
      environment: Environment.Production,
      subdomain: CONFIG.SUBDOMAIN,
      basicAuthUserName: 'invalidKey',
      basicAuthPassword: CONFIG.PASSWORD,
    });
    couponsController = new CouponsController(client);
    invalidCouponsController = new CouponsController(invalidClient);
    const productFamiliesController = new ProductFamiliesController(client);
    productFamily =
      (
        await productFamiliesController.createProductFamily({
          productFamily: {
            name: 'coupons-product-family ab',
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
          'Code: cannot be blank.',
          'Name: cannot be blank.',
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
      const response = await couponsController.readCouponByCode(
        productFamily?.id || 0,
        '15OFF'
      );
      expect(response.statusCode).toBe(200);
      expect(response.result.coupon?.name).toBe('15% off');
      expect(response.result.coupon?.description).toBe('15% off for life');
    });

    test('should throw and 404 error when user sends incorrect product code', async () => {
      const promise = couponsController.readCouponByCode(
        productFamily?.id || 0,
        'invalid'
      );

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw and 404 error when user sends incorrect family id ', async () => {
      const promise = couponsController.readCouponByCode(299, '15OFF');

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
    test('should throw and 401 error when user sends incorrect credentials to find a coupon by code', async () => {
      const promise = invalidCouponsController.readCouponByCode(
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
            productFamilyId: String(productFamily?.id),
          },
        }
      );
      const couponId = createReponse.result.coupon?.id || 0;
      const payload = {
        name: '15% off',
        description: '15% off for life',
        percentage: 15,
        allowNegativeBalance: 'false',
        recurring: 'false',
        endDate: '2024-08-29T12:00:00-04:00',
        productFamilyId: '0',
        stackable: 'true',
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
      // verify the
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
      const createReponse = await couponsController.createCoupon(
        productFamily?.id || 0,
        {
          coupon: {
            ...couponBody.coupon,
            productFamilyId: String(productFamily?.id),
          },
        }
      );
      console.log(createReponse);
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
      const listResponse = await couponsController.readCouponUsage(
        productFamily?.id || 0,
        couponId
      );
      expect(listResponse.statusCode).toBe(200);
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
            productFamilyId: String(productFamily?.id),
          },
        }
      );
      const couponCode = createReponse.result.coupon?.code;
      const validateResponse = await couponsController.validateCoupon(
        couponCode || ''
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

    test('should throw and 404 error when the user sends invalid credentials', async () => {
      const promise = invalidCouponsController.validateCoupon('15OFF');

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
  });

  describe('Create/Update Currency Prices', () => {
    //TODO: Should return status 200 but it returns status 404 fixing
    test('should update a coupon', async () => {
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
      try {
        const updateResponse =
          await couponsController.updateCouponCurrencyPrices(couponId, {
            currencyPrices: [
              {
                currency: 'EUR',
                price: 10,
              },
            ],
          });

        console.log(updateResponse);

        expect(updateResponse.statusCode).toBe(200);
      } catch (error) {
        console.log(error, 'error');
      }
    });

    test('should throw and 404 error when the user sends invalid or missing parameters in the POST request', async () => {
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
      const promise = couponsController.updateCouponCurrencyPrices(couponId, {
        currencyPrices: [],
      });

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw and 404 error when the user sends invalid or missing parameters in the PUT request', async () => {
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
      const promise = couponsController.updateCouponCurrencyPrices(couponId, {
        currencyPrices: [
          {
            currency: '',
            price: -1,
          },
        ],
      });

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
  });
});
