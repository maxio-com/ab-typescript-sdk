import { createClient } from '../config';
import { uid } from 'uid';

import {
  ProductFamiliesController,
  ProductFamilyResponse,
  ProductResponse,
  ProductsController,
  SubscriptionResponse,
  SubscriptionsController,
} from 'advanced-billing-sdk';
import { product } from '../mocks/products';
import { createMockSubscription } from '../mocks/subscriptions';

export interface SubscriptionConfig {
  productFamilyName?: string;
  productHandle?: string;
  customerReference?: string;
}

export interface SubscriptionContext {
  productFamilyResponse: ProductFamilyResponse | null;
  subscriptionResponse: SubscriptionResponse | null;
  productResponse: ProductResponse | null;
}

export async function createSubscription({
  productFamilyName = uid(),
  productHandle = uid(),
  customerReference = uid(),
}: SubscriptionConfig): Promise<SubscriptionContext> {
  const client = createClient();
  const subscriptionsController = new SubscriptionsController(client);
  const productFamiliesController = new ProductFamiliesController(client);
  const productsController = new ProductsController(client);

  const productFamilyResponse = (
    await productFamiliesController.createProductFamily({
      productFamily: {
        name: productFamilyName,
        description: 'generic product family',
      },
    })
  ).result;
  const productResponse = (
    await productsController.createProduct(
      productFamilyResponse.productFamily?.id || 0,
      {
        product: { ...product, handle: productHandle },
      }
    )
  ).result;

  const subscriptionBody = createMockSubscription({
    productHandle,
    customerReference,
  });

  const subscriptionResponse = (
    await subscriptionsController.createSubscription({
      subscription: subscriptionBody,
    })
  ).result;

  return {
    productFamilyResponse,
    subscriptionResponse,
    productResponse,
  };
}
