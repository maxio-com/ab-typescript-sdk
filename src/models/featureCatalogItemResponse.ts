/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  FeatureCatalogItem,
  featureCatalogItemSchema,
} from './featureCatalogItem.js';

export interface FeatureCatalogItemResponse {
  /** A feature template attached to a specific product or component (or one of their price points), with a concrete value. When a subscriber signs up for or is assigned this product/component, the feature catalog item is provisioned as an entitlement on their subscription. */
  feature: FeatureCatalogItem;
  [key: string]: unknown;
}

export const featureCatalogItemResponseSchema: Schema<FeatureCatalogItemResponse> = lazy(
  () => expandoObject({ feature: ['feature', featureCatalogItemSchema] })
);
