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
import { uid } from 'uid';

export interface MigrationContext {
  productFamilyResponse: ProductFamilyResponse | null;
  productResponse01: ProductResponse | null;
  productResponse02: ProductResponse | null;
  subscriptionResponse: SubscriptionResponse | null;
}

export async function createContextForMigration(): Promise<MigrationContext> {
  const client = createClient();
  const productHandleId = `${uid()}-subs01`;
  const productHandleEngageId = `${uid()}-subs02`;
  const productFamilyName = `${uid()} subscriptions migrations`;
  const subscriptionsController = new SubscriptionsController(client);
  const productFamiliesController = new ProductFamiliesController(client);
  const productsController = new ProductsController(client);

  const productFamilyResponse = (
    await productFamiliesController.createProductFamily({
      productFamily: {
        name: productFamilyName,
        description: 'Amazing subscriptions migration',
      },
    })
  ).result;
  const productResponse01 = (
    await productsController.createProduct(
      productFamilyResponse.productFamily?.id || 0,
      {
        product: { ...product, handle: productHandleId },
      }
    )
  ).result;
  const productResponse02 = (
    await productsController.createProduct(
      productFamilyResponse.productFamily?.id || 0,
      {
        product: { ...product, handle: productHandleEngageId },
      }
    )
  ).result;

  const subscriptionBody = createMockSubscription({
    productHandle: productHandleId,
    customerReference: productHandleEngageId,
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
