import {
  ProductFamiliesController,
  ProductFamilyResponse,
  ProductResponse,
  ProductsController,
  SubscriptionResponse,
  SubscriptionsController,
} from 'advanced-billing-sdk';
import { createClient } from '../config';
import { product } from '../mocks/products';
import { createMockSubscription } from '../mocks/subscriptions';

export interface MigrationContext {
  productFamilyResponse: ProductFamilyResponse | null;
  productResponse01: ProductResponse | null;
  productResponse02: ProductResponse | null;
  subscriptionResponse: SubscriptionResponse | null;
}

export async function createContextForMigration(): Promise<MigrationContext> {
  const client = createClient();
  const subscriptionsController = new SubscriptionsController(client);
  const productFamiliesController = new ProductFamiliesController(client);
  const productsController = new ProductsController(client);

  const productFamilyResponse = (
    await productFamiliesController.createProductFamily({
      productFamily: {
        name: 'subscriptions migrations 01',
        description: 'Amazing subscriptions migration',
      },
    })
  ).result;
  const productResponse01 = (
    await productsController.createProduct(
      productFamilyResponse.productFamily?.id || 0,
      {
        product: { ...product, handle: 'subs0001' },
      }
    )
  ).result;
  const productResponse02 = (
    await productsController.createProduct(
      productFamilyResponse.productFamily?.id || 0,
      {
        product: { ...product, handle: 'subs0002' },
      }
    )
  ).result;

  const subscriptionBody = createMockSubscription({
    productHandle: 'subs0001',
  });

  const subscriptionResponse = (
    await subscriptionsController.createSubscription({
      subscription: subscriptionBody,
    })
  ).result;

  return {
    productFamilyResponse,
    productResponse01,
    productResponse02,
    subscriptionResponse,
  };
}
