/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  CloneComponentPricePoint,
  cloneComponentPricePointSchema,
} from './cloneComponentPricePoint.js';

export interface CloneComponentPricePointRequest {
  pricePoint: CloneComponentPricePoint;
  [key: string]: unknown;
}

export const cloneComponentPricePointRequestSchema: Schema<CloneComponentPricePointRequest> = lazy(
  () =>
    expandoObject({
      pricePoint: ['price_point', cloneComponentPricePointSchema],
    })
);
