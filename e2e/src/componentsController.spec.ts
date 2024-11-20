import {
  ComponentPricePointsController,
  ComponentsController,
  CreateComponentPricePointRequest,
  CreateComponentPricePointRequestPricePoint,
  CreateMeteredComponent,
  CreateOrUpdateProductRequest,
  IntervalUnit,
  Price,
  PricingScheme,
  ProductFamiliesController,
  ProductFamily,
  ProductsController,
  UpdateComponentRequest,
} from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from './config';
import { uid } from 'uid';

describe('Components Controller', () => {
  let productFamily: ProductFamily | null;
  let componentsController: ComponentsController;
  let productsController: ProductsController;
  let invalidComponentsController: ComponentsController;
  let componentPricePointsController: ComponentPricePointsController;
  let invalidComponentPricePointsController: ComponentPricePointsController;

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createInvalidClient();
    const productFamiliesController = new ProductFamiliesController(client);
    invalidComponentsController = new ComponentsController(invalidClient);
    componentsController = new ComponentsController(client);
    componentPricePointsController = new ComponentPricePointsController(client);
    invalidComponentPricePointsController = new ComponentPricePointsController(
      invalidClient
    );
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

  const invalidComponentId = 'invalid-id';

  const prepareDataForComponentResponse = async (
    productPaload: CreateOrUpdateProductRequest,
    productFamilyId: string,
    componentPayload: CreateMeteredComponent
  ) => {
    await productsController.createProduct(productFamilyId, productPaload);

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
        productFamilyId.toString(),
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
        productFamilyId.toString(),
        meteredComponent
      );

      const componentsControllerInavlidResponse =
        componentsController.findComponent(invalidComponentId);

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
        productFamilyId.toString(),
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
        productFamilyId.toString(),
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
        productFamilyId.toString(),
        meteredComponent
      );

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
        productFamilyId.toString(),
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

  describe('Update Component', () => {
    it('should update component with valid id', async () => {
      const newProductPayload: CreateOrUpdateProductRequest = {
        product: {
          name: `product-update-component-name-${uid()}`,
          handle: `product-update-component-${uid()}`,
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
          name: `update-component-name${uid()}`,
          description: 'test',
          quantity: 1,
          unitName: 'test',
          price: 1,
          handle: uid(),
          pricingScheme: PricingScheme.PerUnit,
          unitPrice: 1,
        },
      };

      const updatedMeteredComponent: UpdateComponentRequest = {
        component: {
          name: 'updated name',
          description: 'updated description',
        },
      };

      const { component } = await prepareDataForComponentResponse(
        newProductPayload,
        productFamilyId.toString(),
        meteredComponent
      );

      const componentId = component.id?.toString() || '';

      const updateComponentResponse =
        await componentsController.updateComponent(
          componentId,
          updatedMeteredComponent
        );

      expect(updateComponentResponse.statusCode).toBe(200);
      expect(updateComponentResponse.result.component.description).toBe(
        updatedMeteredComponent.component.description
      );
    });
    it('should not update component with invalid id', async () => {
      const newProductPayload = {
        product: {
          name: `product-update-component-name-invalid-id-${uid()}`,
          handle: `product-update-component-${uid()}`,
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
          name: `update-component-name${uid()}`,
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
        productFamilyId.toString(),
        meteredComponent
      );

      const updateComponentResponse = componentsController.updateComponent(
        invalidComponentId,
        {
          component: {
            name: 'updated name',
            description: 'updated description',
          },
        }
      );

      expect(updateComponentResponse).rejects.toThrow();

      await updateComponentResponse.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
    it('should not update component with invalid credentials', async () => {
      const newProductPayload = {
        product: {
          name: `product-update-component-name-${uid()}`,
          handle: `product-update-component-${uid()}`,
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
          name: `update-component-name${uid()}`,
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
        productFamilyId.toString(),
        meteredComponent
      );

      const componentId = component.id?.toString() || '';

      const updateComponentResponse =
        invalidComponentsController.updateComponent(componentId, {
          component: {
            name: 'updated name',
            description: 'updated description',
          },
        });

      expect(updateComponentResponse).rejects.toThrow();

      await updateComponentResponse.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
  describe('Archive Component', () => {
    it('should archive component with valid id', async () => {
      const newProductPayload: CreateOrUpdateProductRequest = {
        product: {
          name: `product-archive-component-name-${uid()}`,
          handle: `product-archive-component-${uid()}`,
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
          name: `archive-component-name${uid()}`,
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
        productFamilyId.toString(),
        meteredComponent
      );

      const componentId = component.id?.toString() || '';

      const archiveComponentResponse =
        await componentsController.archiveComponent(
          productFamilyId,
          componentId
        );

      expect(archiveComponentResponse.statusCode).toBe(200);
    });
    it('should not archive component with invalid id', async () => {
      const newProductPayload = {
        product: {
          name: `product-archive-component-name-invalid-id-${uid()}`,
          handle: `product-archive-component-${uid()}`,
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
          name: `archive-component-name${uid()}`,
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
        productFamilyId.toString(),
        meteredComponent
      );

      const archiveComponentResponse = componentsController.archiveComponent(
        productFamilyId,
        invalidComponentId
      );

      expect(archiveComponentResponse).rejects.toThrow();

      await archiveComponentResponse.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
    it('should not archive component with invalid credentials', async () => {
      const newProductPayload = {
        product: {
          name: `product-archive-component-name-${uid()}`,
          handle: `product-archive-component-${uid()}`,
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
          name: `archive-component-name${uid()}`,
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
        productFamilyId.toString(),
        meteredComponent
      );

      const componentId = component.id?.toString() || '';

      const archiveComponentResponse =
        invalidComponentsController.archiveComponent(
          productFamilyId,
          componentId
        );

      expect(archiveComponentResponse).rejects.toThrow();

      await archiveComponentResponse.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
  describe('List Components', () => {
    it('should list components', async () => {
      const componentsControllerResponse =
        await componentsController.listComponents({});

      expect(componentsControllerResponse.statusCode).toBe(200);
    });
    it('should not list components with invalid credentials', async () => {
      const invalidcomponentsControllerResponse =
        invalidComponentsController.listComponents({});

      expect(invalidcomponentsControllerResponse).rejects.toThrow();

      await invalidcomponentsControllerResponse.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
  describe('List Components for product family', () => {
    it('should list components associated with the specifed product family', async () => {
      const productFamilyId = productFamily?.id || 0;

      const componentsControllerResponse =
        await componentsController.listComponentsForProductFamily({
          productFamilyId,
        });

      expect(componentsControllerResponse.statusCode).toBe(200);
    });
    it('should list components associated with the specifed product family', async () => {
      const invalidProductFamilyId = 123;
      const listComponentsForProductFamilyResponse =
        componentsController.listComponentsForProductFamily({
          productFamilyId: invalidProductFamilyId,
        });

      expect(listComponentsForProductFamilyResponse).rejects.toThrow();

      await listComponentsForProductFamilyResponse.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
    it('should not list components associated with the specifed product family with invalid credentials', async () => {
      const productFamilyId = productFamily?.id || 0;

      const componentsControllerResponse =
        invalidComponentsController.listComponentsForProductFamily({
          productFamilyId,
        });

      expect(componentsControllerResponse).rejects.toThrow();

      await componentsControllerResponse.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
  describe('Update Product Family Component', () => {
    it('should update product family component with valid id', async () => {
      const newProductPayload: CreateOrUpdateProductRequest = {
        product: {
          name: `update-product-family-component-name-${uid()}`,
          handle: `update-product-family-component-name-${uid()}`,
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
          name: `update-product-family-component-name${uid()}`,
          description: 'test',
          quantity: 1,
          unitName: 'test',
          price: 1,
          handle: uid(),
          pricingScheme: PricingScheme.PerUnit,
          unitPrice: 1,
        },
      };

      const updatedMeteredComponent: UpdateComponentRequest = {
        component: {
          name: 'updated-product-family-component-name',
          description: 'updated-description',
        },
      };

      const { component } = await prepareDataForComponentResponse(
        newProductPayload,
        productFamilyId.toString(),
        meteredComponent
      );

      const componentId = component.id?.toString() || '';

      const updateComponentResponse =
        await componentsController.updateProductFamilyComponent(
          productFamilyId,
          componentId,
          updatedMeteredComponent
        );

      expect(updateComponentResponse.statusCode).toBe(200);
      expect(updateComponentResponse.result.component.name).toBe(
        updatedMeteredComponent.component.name
      );
    });
    it('should not update product family component with invalid id', async () => {
      const newProductPayload = {
        product: {
          name: `update-product-family-component-invalid-id-${uid()}`,
          handle: `update-product-family-component-invalid-id-${uid()}`,
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
          name: `update-component-name${uid()}`,
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
        productFamilyId.toString(),
        meteredComponent
      );

      const updateComponentResponse =
        componentsController.updateProductFamilyComponent(
          productFamilyId,
          invalidComponentId,
          {
            component: {
              name: 'updated-product-family-component-name-with-invalid-id',
              description: 'updated-description-with-invalid-id',
            },
          }
        );

      expect(updateComponentResponse).rejects.toThrow();

      await updateComponentResponse.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
    it('should not update product family component with invalid credentials', async () => {
      const newProductPayload = {
        product: {
          name: `update-product-family-component-with-invalid-credentials-${uid()}`,
          handle: `update-product-family-component-with-invalid-credentials-${uid()}`,
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
          name: `update-component-name${uid()}`,
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
        productFamilyId.toString(),
        meteredComponent
      );

      const componentId = component.id?.toString() || '';

      const updateComponentResponse =
        invalidComponentsController.updateProductFamilyComponent(
          productFamilyId,
          componentId,
          {
            component: {
              name: `updated-product-family-component-name-with-invalid-credentials-${uid()}`,
              description: `updated-product-family-component-description-with-invalid-credentials-${uid()}`,
            },
          }
        );

      expect(updateComponentResponse).rejects.toThrow();

      await updateComponentResponse.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
  describe('Promote Component Price Point to default', () => {
    it('should promote component price to default', async () => {
      const newProductPayload: CreateOrUpdateProductRequest = {
        product: {
          name: `promote-component-price-to-default-name-${uid()}`,
          handle: `promote-component-price-to-default-handle-${uid()}`,
          description: '',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
        },
      };

      const price: Price = {
        starting_quantity: '1',
        ending_quantity: '',
        unit_price: '1',
        startingQuantity: '',
        unitPrice: '',
      };

      const productFamilyId = productFamily?.id || 0;

      const createComponentPricePointRequestPricePoint: CreateComponentPricePointRequestPricePoint =
        {
          name: `price-point-name-${uid()}`,
          handle: `price-point-handle-${uid()}`,
          prices: [price],
          pricing_scheme: 'per_unit',
          tax_included: false,
          pricingScheme: PricingScheme.PerUnit,
          overagePricing: [],
        };

      const pricePoint: CreateComponentPricePointRequest = {
        pricePoint: createComponentPricePointRequestPricePoint,
      };

      const meteredComponent: CreateMeteredComponent = {
        meteredComponent: {
          productFamilyId,
          name: `promote-component-price-to-default-component-name${uid()}`,
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
        productFamilyId.toString(),
        meteredComponent
      );

      const createComponentPricePointResponse =
        await componentPricePointsController.createComponentPricePoint(
          component.id || 0,
          pricePoint
        );

      const pricePointId =
        createComponentPricePointResponse.result.pricePoint?.id || 0;

      const promoteComponentPricePointToDefaultResponse =
        await componentPricePointsController.promoteComponentPricePointToDefault(
          component.id || 0,
          pricePointId
        );

      expect(promoteComponentPricePointToDefaultResponse.statusCode).toBe(200);
      expect(
        promoteComponentPricePointToDefaultResponse.result.component
          .defaultPricePointId
      ).toBe(pricePointId);
    });

    it('should not promote component price to default with invalid price point id', async () => {
      const newProductPayload: CreateOrUpdateProductRequest = {
        product: {
          name: `promote-component-price-to-default-name-${uid()}`,
          handle: `promote-component-price-to-default-handle-${uid()}`,
          description: '',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
        },
      };

      const price: Price = {
        starting_quantity: '1',
        ending_quantity: '',
        unit_price: '1',
        startingQuantity: '',
        unitPrice: '',
      };

      const productFamilyId = productFamily?.id || 0;

      const createComponentPricePointRequestPricePoint: CreateComponentPricePointRequestPricePoint =
        {
          name: `price-point-name-${uid()}`,
          handle: `price-point-handle-${uid()}`,
          prices: [price],
          pricing_scheme: 'per_unit',
          tax_included: false,
          pricingScheme: PricingScheme.PerUnit,
          overagePricing: [],
        };

      const pricePoint: CreateComponentPricePointRequest = {
        pricePoint: createComponentPricePointRequestPricePoint,
      };

      const meteredComponent: CreateMeteredComponent = {
        meteredComponent: {
          productFamilyId,
          name: `promote-component-price-to-default-component-name${uid()}`,
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
        productFamilyId.toString(),
        meteredComponent
      );

      await componentPricePointsController.createComponentPricePoint(
        component.id || 0,
        pricePoint
      );

      const invalidPricePointId = 0;
      const invalidComponentId = 0;

      const promoteComponentPricePointToDefaultResponse =
        componentPricePointsController.promoteComponentPricePointToDefault(
          invalidComponentId,
          invalidPricePointId
        );

      expect(promoteComponentPricePointToDefaultResponse).rejects.toThrow();

      await promoteComponentPricePointToDefaultResponse.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });
    it('should not promote component price to default with invalid credentials', async () => {
      const newProductPayload: CreateOrUpdateProductRequest = {
        product: {
          name: `promote-component-price-to-default-name-${uid()}`,
          handle: `promote-component-price-to-default-handle-${uid()}`,
          description: '',
          requireCredit_card: true,
          priceInCents: BigInt(1000),
          interval: 1,
          intervalUnit: IntervalUnit.Month,
        },
      };

      const price: Price = {
        starting_quantity: '1',
        ending_quantity: '',
        unit_price: '1',
        startingQuantity: '',
        unitPrice: '',
      };

      const productFamilyId = productFamily?.id || 0;

      const createComponentPricePointRequestPricePoint: CreateComponentPricePointRequestPricePoint =
        {
          name: `price-point-name-${uid()}`,
          handle: `price-point-handle-${uid()}`,
          prices: [price],
          pricing_scheme: 'per_unit',
          tax_included: false,
          pricingScheme: PricingScheme.PerUnit,
          overagePricing: [],
        };

      const pricePoint: CreateComponentPricePointRequest = {
        pricePoint: createComponentPricePointRequestPricePoint,
      };

      const meteredComponent: CreateMeteredComponent = {
        meteredComponent: {
          productFamilyId,
          name: `promote-component-price-to-default-component-name${uid()}`,
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
        productFamilyId.toString(),
        meteredComponent
      );

      await componentPricePointsController.createComponentPricePoint(
        component.id || 0,
        pricePoint
      );

      const invalidPricePointId = 0;

      const promoteComponentPricePointToDefaultResponse =
        invalidComponentPricePointsController.promoteComponentPricePointToDefault(
          component.id || 0,
          invalidPricePointId
        );

      expect(promoteComponentPricePointToDefaultResponse).rejects.toThrow();

      await promoteComponentPricePointToDefaultResponse.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
});
