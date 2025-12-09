/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  UpdateComponentPricePoint,
  updateComponentPricePointSchema,
} from './updateComponentPricePoint.js';

export interface UpdateComponentPricePointRequest {
  pricePoint?: UpdateComponentPricePoint;
  [key: string]: unknown;
}

export const updateComponentPricePointRequestSchema: Schema<UpdateComponentPricePointRequest> = lazy(
  () =>
    expandoObject({
      pricePoint: ['price_point', optional(updateComponentPricePointSchema)],
    })
);
