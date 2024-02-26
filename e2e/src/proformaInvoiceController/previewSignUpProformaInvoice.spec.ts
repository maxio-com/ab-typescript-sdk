import { ProformaInvoicesController } from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from '../config';
import { uid } from 'uid';
import createProduct from '../utils/products';
import { createCustomer } from '../utils/customers';

describe('Create a Preview Sign Up Proforma Invoice', () => {
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

  test('should create a preview signup proforma invoice ', async () => {
    const productHandle = uid();
    const { productResponse, productFamilyResponse } = await createProduct({
      productHandle,
    });
    const customer = await createCustomer();

    const response =
      await proformaInvoicesController.previewSignupProformaInvoice(undefined, {
        subscription: {
          productHandle,
          customerReference: uid(),
          customerId: customer.id,
        },
      });

    const { currentProformaInvoice } = response.result.proformaInvoicePreview;
    expect(response.statusCode).toBe(201);
    expect(currentProformaInvoice?.customerId).toBe(customer.id);

    expect(currentProformaInvoice?.productName).toBe(
      productResponse.product.name
    );
    expect(currentProformaInvoice?.productFamilyName).toBe(
      productFamilyResponse?.productFamily?.name
    );
  });

  test('should create a preview signup proforma invoice with next_proforma_invoice attribute', async () => {
    const productHandle = uid();
    const { productResponse, productFamilyResponse } = await createProduct({
      productHandle,
    });
    const customer = await createCustomer();

    const response =
      await proformaInvoicesController.previewSignupProformaInvoice(
        'nextProformaId',
        {
          subscription: {
            productHandle,
            customerReference: uid(),
            customerId: customer.id,
          },
        }
      );

    expect(response.request.url).toContain(
      'next_proforma_invoice=nextProformaId'
    );
    const { currentProformaInvoice } = response.result.proformaInvoicePreview;
    expect(response.statusCode).toBe(201);
    expect(currentProformaInvoice?.customerId).toBe(customer.id);

    expect(currentProformaInvoice?.productName).toBe(
      productResponse.product.name
    );
    expect(currentProformaInvoice?.productFamilyName).toBe(
      productFamilyResponse?.productFamily?.name
    );
  });

  test('should throw an error when user sends an invalid payload with a missing product', async () => {
    const promise = proformaInvoicesController.previewSignupProformaInvoice(
      '',
      {
        subscription: {
          customerReference: uid(),
        },
      }
    );

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
    const promise = proformaInvoicesController.previewSignupProformaInvoice(
      '',
      {
        subscription: {
          productHandle,
          customerReference: uid(),
        },
      }
    );

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
      invalidProformaInvoicesController.previewSignupProformaInvoice('', {
        subscription: {},
      });

    expect(promise).rejects.toThrow();
    await promise.catch((reason) => {
      expect(reason.statusCode).toBe(401);
    });
  });
});
