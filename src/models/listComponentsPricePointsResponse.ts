/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import {
  ComponentPricePoint,
  componentPricePointSchema,
} from './componentPricePoint.js';

export interface ListComponentsPricePointsResponse {
  pricePoints: ComponentPricePoint[];
  [key: string]: unknown;
}

export const listComponentsPricePointsResponseSchema: Schema<ListComponentsPricePointsResponse> = lazy(
  () =>
    expandoObject({
      pricePoints: ['price_points', array(componentPricePointSchema)],
    })
);
