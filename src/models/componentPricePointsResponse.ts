/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  ComponentPricePoint,
  componentPricePointSchema,
} from './componentPricePoint.js';
import {
  ListPublicKeysMeta,
  listPublicKeysMetaSchema,
} from './listPublicKeysMeta.js';

export interface ComponentPricePointsResponse {
  pricePoints?: ComponentPricePoint[];
  meta?: ListPublicKeysMeta;
  [key: string]: unknown;
}

export const componentPricePointsResponseSchema: Schema<ComponentPricePointsResponse> = expandoObject(
  {
    pricePoints: [
      'price_points',
      optional(array(lazy(() => componentPricePointSchema))),
    ],
    meta: ['meta', optional(lazy(() => listPublicKeysMetaSchema))],
  }
);
