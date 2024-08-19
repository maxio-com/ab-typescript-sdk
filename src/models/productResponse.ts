/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { Product, productSchema } from './product';

export interface ProductResponse {
  product: Product;
  [key: string]: unknown;
}

export const productResponseSchema: Schema<ProductResponse> = expandoObject({
  product: ['product', lazy(() => productSchema)],
});
