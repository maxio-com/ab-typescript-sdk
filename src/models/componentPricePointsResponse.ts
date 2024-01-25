/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  ComponentPricePoint,
  componentPricePointSchema,
} from './componentPricePoint';
import {
  ListPublicKeysMeta,
  listPublicKeysMetaSchema,
} from './listPublicKeysMeta';

export interface ComponentPricePointsResponse {
  pricePoints?: ComponentPricePoint[];
  meta?: ListPublicKeysMeta;
}

export const componentPricePointsResponseSchema: Schema<ComponentPricePointsResponse> = object(
  {
    pricePoints: [
      'price_points',
      optional(array(lazy(() => componentPricePointSchema))),
    ],
    meta: ['meta', optional(lazy(() => listPublicKeysMetaSchema))],
  }
);
