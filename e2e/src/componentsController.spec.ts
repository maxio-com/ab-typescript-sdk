import {
  ComponentsController,
  CreateMeteredComponent,
  CreateOrUpdateProductRequest,
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

  const prepareDataForComponentResponse = async (
    productPaload: CreateOrUpdateProductRequest,
    productFamilyId: number,
    componentPayload: CreateMeteredComponent
  ) => {
    await productsController.createProduct(
      productFamilyId.toString(),
      productPaload
    );

    const createComponentReponse =
      await componentsController.createMeteredComponent(productFamilyId, {
        ...componentPayload,
      });

    return createComponentReponse.result;
  };

  describe('Find Component', () => {
    test('should find component with valid id', async () => {
      const newProductPayload: CreateOrUpdateProductRequest = {
        product: {
          name: `product-read-component-name-${uid()}`,
          handle: `product-read-component-${uid()}`,
          description: '',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
        },
      };

      const productFamilyId = productFamily?.id || 0;

      const meteredComponent: CreateMeteredComponent = {
        meteredComponent: {
          productFamilyId,
          name: `component-name-valid${uid()}`,
          description: 'test',
          quantity: 1,
          unitName: 'test',
          price: 1,
          handle: uid(),
          pricingScheme: PricingScheme.PerUnit,
          unitPrice: 1,
        },
      };

      const { component } = await prepareDataForComponentResponse(
        newProductPayload,
        productFamilyId,
        meteredComponent
      );

      const componentHandle = component.handle || '';

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

      const meteredComponent: CreateMeteredComponent = {
        meteredComponent: {
          productFamilyId,
          name: `component-name-valid${uid()}`,
          description: 'test',
          quantity: 1,
          unitName: 'test',
          price: 1,
          handle: uid(),
          pricingScheme: PricingScheme.PerUnit,
          unitPrice: 1,
        },
      };

      await prepareDataForComponentResponse(
        newProductPayload,
        productFamilyId,
        meteredComponent
      );

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

      const meteredComponent: CreateMeteredComponent = {
        meteredComponent: {
          productFamilyId,
          name: `component-name-valid-${uid()}`,
          description: 'test',
          quantity: 1,
          unitName: 'test',
          price: 1,
          handle: uid(),
          pricingScheme: PricingScheme.PerUnit,
          unitPrice: 1,
        },
      };

      const { component } = await prepareDataForComponentResponse(
        newProductPayload,
        productFamilyId,
        meteredComponent
      );

      const componentHandle = component.handle || '';

      const componentsControllerInavlidResponse =
        invalidComponentsController.findComponent(componentHandle);

      expect(componentsControllerInavlidResponse).rejects.toThrow();
      await componentsControllerInavlidResponse.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Read Component', () => {
    it('should read component with valid id', async () => {
      const newProductPayload: CreateOrUpdateProductRequest = {
        product: {
          name: `product-read-component-name-${uid()}`,
          handle: `product-read-component-${uid()}`,
          description: '',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
        },
      };

      const productFamilyId = productFamily?.id || 0;

      const meteredComponent: CreateMeteredComponent = {
        meteredComponent: {
          productFamilyId,
          name: `read-component-name${uid()}`,
          description: 'test',
          quantity: 1,
          unitName: 'test',
          price: 1,
          handle: uid(),
          pricingScheme: PricingScheme.PerUnit,
          unitPrice: 1,
        },
      };

      const { component } = await prepareDataForComponentResponse(
        newProductPayload,
        productFamilyId,
        meteredComponent
      );
      const componentId = component.id?.toString() || '';

      const readComponentResponse = await componentsController.readComponent(
        productFamilyId,
        componentId
      );

      expect(readComponentResponse.statusCode).toBe(200);
      expect(readComponentResponse.result.component.name).toBe(
        meteredComponent.meteredComponent.name
      );
      expect(readComponentResponse.result.component.productFamilyId).toBe(
        meteredComponent.meteredComponent.productFamilyId
      );
      expect(readComponentResponse.result.component.handle).toBe(
        meteredComponent.meteredComponent.handle
      );
    });
    it('should not read component with invalid id', async () => {
      const newProductPayload = {
        product: {
          name: `product-read-component-name-invalid-id-${uid()}`,
          handle: `product-read-component-${uid()}`,
          description: '',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
        },
      };
      const productFamilyId = productFamily?.id || 0;

      const meteredComponent: CreateMeteredComponent = {
        meteredComponent: {
          productFamilyId,
          name: `read-component-name${uid()}`,
          description: 'test',
          quantity: 1,
          unitName: 'test',
          price: 1,
          handle: uid(),
          pricingScheme: PricingScheme.PerUnit,
          unitPrice: 1,
        },
      };

      await prepareDataForComponentResponse(
        newProductPayload,
        productFamilyId,
        meteredComponent
      );

      const invalidComponentId = 'invalid-id';

      const readComponentResponse = componentsController.readComponent(
        productFamilyId,
        invalidComponentId
      );

      expect(readComponentResponse).rejects.toThrow();

      await readComponentResponse.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
    it('should not read component with invalid credentials', async () => {
      const newProductPayload = {
        product: {
          name: `product-read-component-name-${uid()}`,
          handle: `product-read-component-${uid()}`,
          description: '',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
        },
      };
      const productFamilyId = productFamily?.id || 0;

      const meteredComponent: CreateMeteredComponent = {
        meteredComponent: {
          productFamilyId,
          name: `read-component-name${uid()}`,
          description: 'test',
          quantity: 1,
          unitName: 'test',
          price: 1,
          handle: uid(),
          pricingScheme: PricingScheme.PerUnit,
          unitPrice: 1,
        },
      };

      const { component } = await prepareDataForComponentResponse(
        newProductPayload,
        productFamilyId,
        meteredComponent
      );
      const componentId = component.id?.toString() || '';

      const readComponentResponse = invalidComponentsController.readComponent(
        productFamilyId,
        componentId
      );

      expect(readComponentResponse).rejects.toThrow();

      await readComponentResponse.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
});
