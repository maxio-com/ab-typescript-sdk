/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Product, productSchema } from './product';

export interface ProductResponse {
  product: Product;
}

export const productResponseSchema: Schema<ProductResponse> = object({
  product: ['product', lazy(() => productSchema)],
});
