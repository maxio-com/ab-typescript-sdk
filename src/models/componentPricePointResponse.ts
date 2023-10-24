/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  ComponentPricePoint,
  componentPricePointSchema,
} from './componentPricePoint';

export interface ComponentPricePointResponse {
  pricePoint: ComponentPricePoint;
}

export const componentPricePointResponseSchema: Schema<ComponentPricePointResponse> = object(
  { pricePoint: ['price_point', lazy(() => componentPricePointSchema)] }
);
