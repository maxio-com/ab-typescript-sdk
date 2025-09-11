/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  ProductPricePoint,
  productPricePointSchema,
} from './productPricePoint.js';

export interface ProductPricePointResponse {
  pricePoint: ProductPricePoint;
  [key: string]: unknown;
}

export const productPricePointResponseSchema: Schema<ProductPricePointResponse> = expandoObject(
  { pricePoint: ['price_point', lazy(() => productPricePointSchema)] }
);
