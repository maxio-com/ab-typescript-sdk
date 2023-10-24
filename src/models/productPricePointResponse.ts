/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { ProductPricePoint, productPricePointSchema } from './productPricePoint';

export interface ProductPricePointResponse {
  pricePoint: ProductPricePoint;
}

export const productPricePointResponseSchema: Schema<ProductPricePointResponse> = object(
  { pricePoint: ['price_point', lazy(() => productPricePointSchema)] }
);
