/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  UpdateProductPricePoint,
  updateProductPricePointSchema,
} from './updateProductPricePoint.js';

export interface UpdateProductPricePointRequest {
  pricePoint: UpdateProductPricePoint;
  [key: string]: unknown;
}

export const updateProductPricePointRequestSchema: Schema<UpdateProductPricePointRequest> = lazy(
  () =>
    expandoObject({
      pricePoint: ['price_point', updateProductPricePointSchema],
    })
);
