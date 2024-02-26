import { ProformaInvoicesController } from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from '../config';
import { uid } from 'uid';
import createProduct from '../utils/products';
import { createCustomer } from '../utils/customers';

describe('Create Sign up Proforma Invoice', () => {
  let proformaInvoicesController: ProformaInvoicesController;
  let invalidProformaInvoicesController: ProformaInvoicesController;

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createInvalidClient();
    proformaInvoicesController = new ProformaInvoicesController(client);
    invalidProformaInvoicesController = new ProformaInvoicesController(
      invalidClient
    );
  });

  test('should create sign up proforma invoice when user sends a valid product and customer', async () => {
    const productHandle = uid();
    const { productResponse, productFamilyResponse } = await createProduct({
      productHandle,
    });
    const customer = await createCustomer();
    const response =
      await proformaInvoicesController.createSignupProformaInvoice({
        subscription: {
          productHandle: productHandle,
          customerReference: uid(),
          customerId: customer.id,
        },
      });

    expect(response.statusCode).toBe(201);
    expect(response.result.customerId).toBe(customer.id);
    expect(response.result.productName).toBe(productResponse.product.name);
    expect(response.result.productFamilyName).toBe(
      productFamilyResponse?.productFamily?.name
    );
  });

  test('should create sign up proforma invoice when user sends a valid product and customer attributes', async () => {
    const productHandle = uid();
    const { productResponse, productFamilyResponse } = await createProduct({
      productHandle,
    });
    const response =
      await proformaInvoicesController.createSignupProformaInvoice({
        subscription: {
          productHandle: productHandle,
          customerReference: uid(),
          customerAttributes: {
            firstName: 'Martha',
            lastName: 'Perez',
            email: 'martha@example.com',
          },
        },
      });

    expect(response.statusCode).toBe(201);
    expect(response.result.productName).toBe(productResponse.product.name);
    expect(response.result.productFamilyName).toBe(
      productFamilyResponse?.productFamily?.name
    );
  });

  test('should throw an error when user sends an invalid payload with a missing product', async () => {
    const promise = proformaInvoicesController.createSignupProformaInvoice({
      subscription: {
        customerReference: uid(),
      },
    });

    expect(promise).rejects.toThrow();
    await promise.catch((reason) => {
      expect(reason.statusCode).toBe(422);
      expect(reason.result.errors.base).toEqual(['Missing required product']);
    });
  });

  test('should throw an error when user sends an invalid payload with a missing customer', async () => {
    const productHandle = uid();
    await createProduct({
      productHandle,
    });
    const promise = proformaInvoicesController.createSignupProformaInvoice({
      subscription: {
        productHandle,
        customerReference: uid(),
      },
    });

    expect(promise).rejects.toThrow();
    await promise.catch((reason) => {
      expect(reason.statusCode).toBe(422);
      expect(reason.result.errors.customer).toEqual([
        'Missing required customer attributes',
      ]);
    });
  });

  test('should throw an 401 error with invalid credentials', async () => {
    const promise =
      invalidProformaInvoicesController.createSignupProformaInvoice({
        subscription: {},
      });

    expect(promise).rejects.toThrow();
    await promise.catch((reason) => {
      expect(reason.statusCode).toBe(401);
    });
  });
});
