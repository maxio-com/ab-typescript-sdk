/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Product, productSchema } from './product.js';

export interface ProductResponse {
  product: Product;
  [key: string]: unknown;
}

export const productResponseSchema: Schema<ProductResponse> = lazy(() =>
  expandoObject({ product: ['product', productSchema] })
);
