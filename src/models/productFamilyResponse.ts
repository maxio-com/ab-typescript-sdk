/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { ProductFamily, productFamilySchema } from './productFamily.js';

export interface ProductFamilyResponse {
  productFamily?: ProductFamily;
  [key: string]: unknown;
}

export const productFamilyResponseSchema: Schema<ProductFamilyResponse> = lazy(
  () =>
    expandoObject({
      productFamily: ['product_family', optional(productFamilySchema)],
    })
);
