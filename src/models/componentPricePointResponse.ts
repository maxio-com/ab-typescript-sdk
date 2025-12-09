/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  ComponentPricePoint,
  componentPricePointSchema,
} from './componentPricePoint.js';

export interface ComponentPricePointResponse {
  pricePoint: ComponentPricePoint;
  [key: string]: unknown;
}

export const componentPricePointResponseSchema: Schema<ComponentPricePointResponse> = lazy(
  () =>
    expandoObject({ pricePoint: ['price_point', componentPricePointSchema] })
);
