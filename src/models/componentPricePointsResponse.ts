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

export interface ComponentPricePointsResponse {
  pricePoints?: ComponentPricePoint[];
}

export const componentPricePointsResponseSchema: Schema<ComponentPricePointsResponse> = object(
  {
    pricePoints: [
      'price_points',
      optional(array(lazy(() => componentPricePointSchema))),
    ],
  }
);
