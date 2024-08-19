/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import {
  ComponentPricePoint,
  componentPricePointSchema,
} from './componentPricePoint';

export interface ListComponentsPricePointsResponse {
  pricePoints: ComponentPricePoint[];
  [key: string]: unknown;
}

export const listComponentsPricePointsResponseSchema: Schema<ListComponentsPricePointsResponse> = expandoObject(
  {
    pricePoints: ['price_points', array(lazy(() => componentPricePointSchema))],
  }
);
