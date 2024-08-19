/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  ComponentPricePoint,
  componentPricePointSchema,
} from './componentPricePoint';

export interface ComponentPricePointResponse {
  pricePoint: ComponentPricePoint;
  [key: string]: unknown;
}

export const componentPricePointResponseSchema: Schema<ComponentPricePointResponse> = expandoObject(
  { pricePoint: ['price_point', lazy(() => componentPricePointSchema)] }
);
