import { uid } from 'uid';
import { createClient, createInvalidClient } from './config';
import {
  ProductFamiliesController,
  ProductResponse,
  ProductsController,
  IntervalUnit,
} from 'advanced-billing-sdk';
const productId01 = `${uid()}-products-controller`;
const productId02 = `${uid()}-products-controller`;
const productId03 = `${uid()}-products-controller`;
const productId04 = `${uid()}-products-controller`;
const productFamilyName = `${uid()}-product-family`;
let newProductId: string;

const payloads = [
  {
    product: {
      name: productId01,
      handle: productId01,
      description: 'premium-desc',
      priceInCents: BigInt(1000),
      interval: 1,
      intervalUnit: IntervalUnit.Month,
    },
  },
  {
    product: {
      name: productId02,
      handle: productId02,
      description: 'premium-desc',
      priceInCents: BigInt(1000),
      interval: 1,
      intervalUnit: IntervalUnit.Month,
    },
  },
  {
    product: {
      name: productId03,
      handle: productId03,
      description: 'premium-desc',
      priceInCents: BigInt(1000),
      interval: 1,
      intervalUnit: IntervalUnit.Month,
    },
  },
  {
    product: {
      name: productId04,
      handle: productId04,
      description: 'premium-desc',
      priceInCents: BigInt(1000),
      interval: 1,
      intervalUnit: IntervalUnit.Month,
    },
  },
];

describe('Products Controller', () => {
  const invalidClient = createInvalidClient();

  let productFamilyId = 0;
  let productsCreated: ProductResponse[] = [];

  beforeAll(async () => {
    const client = createClient();
    const productFamiliesController = new ProductFamiliesController(client);
    const productsController = new ProductsController(client);
    const payload = {
      productFamily: {
        name: productFamilyName,
        description: 'product 0005 description',
      },
    };

    const response =
      await productFamiliesController.createProductFamily(payload);

    const { productFamily } = response.result;
    productFamilyId = productFamily?.id || 0;
    const promises = payloads.map((payload) =>
      productsController.createProduct(String(productFamilyId), payload)
    );
    const responseCollection = await Promise.all(promises);
    productsCreated = responseCollection.map((response) => response.result);
  });

  beforeEach(() => {
    newProductId = `${uid()}-product-create`;
  });
  describe('Create Product', () => {
    test('should create a product when the user send the correct values', async () => {
      const client = createClient();
      const productsController = new ProductsController(client);

      const newProductPayload = {
        product: {
          name: newProductId,
          handle: newProductId,
          description: 'This is our gold plan.',
          accountingCode: '123',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
          autoCreateSignupPage: true,
          taxCode: 'D0000000',
        },
      };
      const productResponse = await productsController.createProduct(
        String(productFamilyId),
        newProductPayload
      );
      expect(productResponse.statusCode).toBe(201);
      expect(productResponse.result.product.name).toBe(newProductId);
      expect(productResponse.result.product.handle).toBe(newProductId);
    });

    test('should throw a error when the user send invalid payload values', async () => {
      const client = createClient();
      const productsController = new ProductsController(client);
      const newProductPayload = {
        product: {
          name: '',
          handle: '',
          description: '',
          accountingCode: '',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
          autoCreateSignupPage: true,
        },
      };
      const promise = productsController.createProduct(
        String(productFamilyId),
        newProductPayload
      );

      expect(promise).rejects.toThrow();

      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(422);
        expect(reason.result.errors).toEqual(['Name: cannot be blank.']);
      });
    });

    test('should throw a 401 error when the user use invalid authorizations', async () => {
      const productsController = new ProductsController(invalidClient);

      const newProductPayload = {
        product: {
          name: newProductId,
          handle: newProductId,
          description: 'This is our gold plan.',
          accountingCode: '123',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
          autoCreateSignupPage: true,
          taxCode: 'D0000000',
        },
      };

      const promise = productsController.createProduct(
        String(productFamilyId),
        newProductPayload
      );

      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('List Product', () => {
    test('should list all products with the valid credentials', async () => {
      const client = createClient();
      const productsController = new ProductsController(client);
      const response = await productsController.listProducts({
      });
      const productNames = response.result
        .map((result: ProductResponse) => result.product.name)
        .sort();
      expect(response.result.length >= 5).toBeTruthy();
      const hasAllProducts = [
        productId01,
        productId02,
        productId03,
        productId04,
      ].every((name) => productNames.includes(name));
      expect(hasAllProducts).toBeTruthy();
    });

    test('should throw 401 error when user list products with invalid credentials', async () => {
      const productsController = new ProductsController(invalidClient);
      const promise = productsController.listProducts({});
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('Read Product', () => {
    test('should read a product when the user sends the correct id', async () => {
      const productId = productsCreated[0].product.id || 0;
      const client = createClient();
      const productsController = new ProductsController(client);
      const response = await productsController.readProduct(productId);
      expect(response.statusCode).toBe(200);
      expect(response.result).toEqual(productsCreated[0]);
    });

    test('should throw 401 error when the user has invalid credentials', async () => {
      const productId = productsCreated[0].product.id || 0;
      const productsController = new ProductsController(invalidClient);
      const promise = productsController.readProduct(productId);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should throw 404 error when the user sends invalid product id', async () => {
      const productId = 141241241;
      const client = createClient();
      const productsController = new ProductsController(client);
      const promise = productsController.readProduct(productId);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
  });

  describe('Update Product', () => {
    test('should update a product when the user send the correct values', async () => {
      const updatePayload = {
        name: 'Updated Product Name',
        description: 'An updated description for testing',
        priceInCents: BigInt(1200),
        interval: 3,
        intervalUnit: IntervalUnit.Month,
      };
      const productId = productsCreated[0].product.id || 0;

      const client = createClient();
      const productsController = new ProductsController(client);
      const response = await productsController.updateProduct(productId, {
        product: updatePayload,
      });

      expect(response.statusCode).toBe(200);
      expect(response.result.product.name).toBe('Updated Product Name');
      expect(response.result.product.description).toBe(
        'An updated description for testing'
      );
      expect(response.result.product.priceInCents).toBe(BigInt(1200));
      expect(response.result.product.interval).toBe(3);
      expect(response.result.product.intervalUnit).toBe('month');
    });

    test('should throw 422 error when the user sends invalid values for the update', async () => {
      const updatePayload = {
        name: '',
        description: '',
        priceInCents: BigInt(0),
        interval: 0,
        intervalUnit: IntervalUnit.Month,
      };
      const productId = productsCreated[0].product.id || 0;
      const client = createClient();
      const productsController = new ProductsController(client);
      const promise = productsController.updateProduct(productId, {
        product: updatePayload,
      });
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(422);
        expect(error.result.errors).toEqual(['Name: cannot be blank.']);
      });
    });

    test('should throw 404 error when the user sends invalid product id', async () => {
      const updatePayload = {
        name: 'Updated Product Name',
        description: 'An updated description for testing',
        priceInCents: BigInt(1200),
        interval: 3,
        intervalUnit: IntervalUnit.Month,
      };
      const productId = 141241241;
      const client = createClient();
      const productsController = new ProductsController(client);
      const promise = productsController.updateProduct(productId, {
        product: updatePayload,
      });
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });

    test('should throw 401 error when the user has invalid credentials', async () => {
      const productId = productsCreated[0].product.id || 0;
      const updatePayload = {
        name: 'Updated Product Name',
        description: 'An updated description for testing',
        priceInCents: BigInt(1200),
        interval: 3,
        intervalUnit: IntervalUnit.Month,
      };
      const productsController = new ProductsController(invalidClient);
      const promise = productsController.updateProduct(productId, {
        product: updatePayload,
      });
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('Archive Product', () => {
    test('should delete a product when the user send the correct id', async () => {
      const productId = productsCreated[0].product.id || 0;
      const client = createClient();
      const productsController = new ProductsController(client);
      const response = await productsController.archiveProduct(productId);
      const readResponse = await productsController.readProduct(productId);
      expect(response.statusCode).toBe(200);
      expect(readResponse.result.product.archivedAt).toBeTruthy();
    });

    test('should throw 401 error when the user has invalid credentials', async () => {
      const productId = productsCreated[0].product.id || 0;
      const productsController = new ProductsController(invalidClient);
      const promise = productsController.archiveProduct(productId);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should throw 404 error when the user sends invalid product id', async () => {
      const productId = 141241241;
      const client = createClient();
      const productsController = new ProductsController(client);
      const promise = productsController.archiveProduct(productId);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
  });
});
