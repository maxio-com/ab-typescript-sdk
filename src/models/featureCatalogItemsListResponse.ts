/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, number, Schema } from '../schema.js';
import {
  FeatureCatalogItem,
  featureCatalogItemSchema,
} from './featureCatalogItem.js';

export interface FeatureCatalogItemsListResponse {
  features: FeatureCatalogItem[];
  /** The number of subscriptions on this product/component that would be affected if a feature catalog item change were propagated with `propagate_to_subscriptions=true`. */
  subscriptionsCount: number;
  [key: string]: unknown;
}

export const featureCatalogItemsListResponseSchema: Schema<FeatureCatalogItemsListResponse> = lazy(
  () =>
    expandoObject({
      features: ['features', array(featureCatalogItemSchema)],
      subscriptionsCount: ['subscriptions_count', number()],
    })
);
