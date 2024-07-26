import {
  ComponentsController,
  IntervalUnit,
  PricingScheme,
  ProductFamiliesController,
  ProductFamily,
  ProductsController,
} from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from './config';
import { uid } from 'uid';

describe('Components Controller', () => {
  let productFamily: ProductFamily | null;
  let componentsController: ComponentsController;
  let productsController: ProductsController;
  let invalidComponentsController: ComponentsController;

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createInvalidClient();
    const productFamiliesController = new ProductFamiliesController(client);
    invalidComponentsController = new ComponentsController(invalidClient);
    componentsController = new ComponentsController(client);
    productsController = new ProductsController(client);
    productFamily =
      (
        await productFamiliesController.createProductFamily({
          productFamily: {
            name: `coupons-product-family-${uid()}`,
            description: 'product family',
          },
        })
      ).result.productFamily || null;
  });

  describe('Find Component', () => {
    test('should find component with valid id', async () => {
      const newProductPayload = {
        product: {
          name: `product-find-component-name-${uid()}`,
          handle: `product-find-component-${uid()}`,
          description: '',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
        },
      };

      const productFamilyId = productFamily?.id || 0;
      const meteredComponent = {
        productFamilyId,
        name: `component-name-valid${uid()}`,
        description: 'test',
        quantity: 1,
        unitName: 'test',
        price: 1,
        handle: uid(),
        pricingScheme: PricingScheme.PerUnit,
        unitPrice: 1,
      };

      await productsController.createProduct(
        productFamilyId.toString(),
        newProductPayload
      );

      const createComponentReponse =
        await componentsController.createMeteredComponent(productFamilyId, {
          meteredComponent,
        });

      const componentHandle =
        createComponentReponse.result.component?.handle || '';

      const componentsControllerResponse =
        await componentsController.findComponent(componentHandle);

      expect(componentsControllerResponse.statusCode).toBe(200);
      expect(componentsControllerResponse.result.component?.handle).toBe(
        componentHandle
      );
    });

    test('should not find component with invllid id', async () => {
      const newProductPayload = {
        product: {
          name: `product-find-component-name-invalid-id-${uid()}`,
          handle: `product-find-component-${uid()}`,
          description: '',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
        },
      };
      const productFamilyId = productFamily?.id || 0;
      const meteredComponent = {
        productFamilyId,
        name: `component-name-invalid-${uid()}`,
        description: 'test',
        quantity: 1,
        unitName: 'test',
        price: 1,
        handle: uid(),
        pricingScheme: PricingScheme.PerUnit,
        unitPrice: 1,
      };

      await productsController.createProduct(
        productFamilyId.toString(),
        newProductPayload
      );

      await componentsController.createMeteredComponent(productFamilyId, {
        meteredComponent,
      });

      const componentsControllerInavlidResponse =
        componentsController.findComponent('invalid-id');

      expect(componentsControllerInavlidResponse).rejects.toThrow();

      await componentsControllerInavlidResponse.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should not find component with invalid credentials', async () => {
      const newProductPayload = {
        product: {
          name: `product-find-component-name-${uid()}`,
          handle: `product-find-component-${uid()}`,
          description: '',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
        },
      };
      const productFamilyId = productFamily?.id || 0;
      const meteredComponent = {
        productFamilyId,
        name: `component-name-invalid-credentials${uid()}`,
        description: 'test',
        quantity: 1,
        unitName: 'test',
        price: 1,
        handle: uid(),
        pricingScheme: PricingScheme.PerUnit,
        unitPrice: 1,
      };

      await productsController.createProduct(
        productFamilyId.toString(),
        newProductPayload
      );

      const componentsControllerResponse =
        await componentsController.createMeteredComponent(productFamilyId, {
          meteredComponent,
        });

      const componentHandle =
        componentsControllerResponse.result.component?.handle || '';

      const componentsControllerInavlidResponse =
        invalidComponentsController.findComponent(componentHandle);

      expect(componentsControllerInavlidResponse).rejects.toThrow();
      await componentsControllerInavlidResponse.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
});
