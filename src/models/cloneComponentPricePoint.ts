/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  CloneFeatureCatalogItem,
  cloneFeatureCatalogItemSchema,
} from './cloneFeatureCatalogItem.js';

export interface CloneComponentPricePoint {
  name: string;
  handle?: string;
  /** The features the clone gets. The clone does not copy the source price point's features, so send every feature it should have. */
  featureCatalogItems?: CloneFeatureCatalogItem[];
  [key: string]: unknown;
}

export const cloneComponentPricePointSchema: Schema<CloneComponentPricePoint> = lazy(
  () =>
    expandoObject({
      name: ['name', string()],
      handle: ['handle', optional(string())],
      featureCatalogItems: [
        'feature_catalog_items',
        optional(array(cloneFeatureCatalogItemSchema)),
      ],
    })
);
