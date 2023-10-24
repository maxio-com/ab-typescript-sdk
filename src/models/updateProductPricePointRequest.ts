/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  UpdateProductPricePoint,
  updateProductPricePointSchema,
} from './updateProductPricePoint';

export interface UpdateProductPricePointRequest {
  pricePoint: UpdateProductPricePoint;
}

export const updateProductPricePointRequestSchema: Schema<UpdateProductPricePointRequest> = object(
  { pricePoint: ['price_point', lazy(() => updateProductPricePointSchema)] }
);
