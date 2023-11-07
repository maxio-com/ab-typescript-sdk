import { createClient } from './config';
import { ProductFamiliesController } from '../src/controllers/productFamiliesController';

describe('ProductsFamilies Controller', () => {
  test('should create a product family with the correct params', async () => {
    const client = createClient();
    const productFamiliesController = new ProductFamiliesController(client);
    const payload = {
      productFamily: {
        name: 'Acme Projects',
        description: 'Amazing project management tool',
      },
    };
    const response =
      await productFamiliesController.createProductFamily(payload);

    const { productFamily } = response.result;

    expect(response.statusCode).toBe(201);
    expect(productFamily).toEqual(
      expect.objectContaining(payload.productFamily)
    );
  });

  test('should throw an error when the user fill invalid values on product families controller', async () => {
    const client = createClient();
    const productFamiliesController = new ProductFamiliesController(client);
    const payload = {
      productFamily: {
        name: '',
        description: '',
      },
    };
    const promise = productFamiliesController.createProductFamily(payload);

    expect(promise).rejects.toThrow();
    promise.catch((error) => {
      expect(error.statusCode).toBe(422);
      expect(error.result.errors).toEqual(['Name: cannot be blank.']);
    });
  });

  test('should read a product family already created', async () => {
    const client = createClient();
    const productFamiliesController = new ProductFamiliesController(client);
    const payload = {
      productFamily: {
        name: 'productFamily',
        description: 'product description',
      },
    };
    const response =
      await productFamiliesController.createProductFamily(payload);

    const { productFamily } = response.result;

    const readResponse = await productFamiliesController.readProductFamily(
      productFamily?.id as number
    );

    expect(readResponse.statusCode).toBe(200);
    expect(readResponse.result.productFamily).toEqual(productFamily);
  });

  test('should list all the products created', async () => {
    const client = createClient();
    const productFamiliesController = new ProductFamiliesController(client);
    const readResponse = await productFamiliesController.listProductFamilies();
    expect(readResponse.statusCode).toBe(200);
    expect(readResponse.result.length).toBe(2);
    expect(readResponse.result.map((item) => item.productFamily?.name)).toEqual(
      ['Acme Projects', 'productFamily']
    );
  });

  test('should list the products from already created product family without products', async () => {
    const client = createClient();
    const productFamiliesController = new ProductFamiliesController(client);
    const productsFamiliesResponse =
      await productFamiliesController.listProductFamilies();
    const [productFamilyResponse] = productsFamiliesResponse.result;
    const productFamilyId = productFamilyResponse.productFamily?.id || 0;
    const readResponse =
      await productFamiliesController.listProductsForProductFamily(
        productFamilyId
      );
    expect(readResponse.statusCode).toBe(200);
    expect(readResponse.result.length).toBe(0);
  });
});
