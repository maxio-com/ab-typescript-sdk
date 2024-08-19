/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  UpdateProductPricePoint,
  updateProductPricePointSchema,
} from './updateProductPricePoint';

export interface UpdateProductPricePointRequest {
  pricePoint: UpdateProductPricePoint;
  [key: string]: unknown;
}

export const updateProductPricePointRequestSchema: Schema<UpdateProductPricePointRequest> = expandoObject(
  { pricePoint: ['price_point', lazy(() => updateProductPricePointSchema)] }
);
