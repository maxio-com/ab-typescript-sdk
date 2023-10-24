/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  ComponentPricePoint,
  componentPricePointSchema,
} from './componentPricePoint';

export interface ListComponentsPricePointsResponse {
  pricePoints: ComponentPricePoint[];
}

export const listComponentsPricePointsResponseSchema: Schema<ListComponentsPricePointsResponse> = object(
  {
    pricePoints: ['price_points', array(lazy(() => componentPricePointSchema))],
  }
);
