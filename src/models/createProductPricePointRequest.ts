/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  CreateProductPricePoint,
  createProductPricePointSchema,
} from './createProductPricePoint.js';

export interface CreateProductPricePointRequest {
  pricePoint: CreateProductPricePoint;
  [key: string]: unknown;
}

export const createProductPricePointRequestSchema: Schema<CreateProductPricePointRequest> = lazy(
  () =>
    expandoObject({
      pricePoint: ['price_point', createProductPricePointSchema],
    })
);
