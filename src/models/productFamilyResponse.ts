/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { ProductFamily, productFamilySchema } from './productFamily';

export interface ProductFamilyResponse {
  productFamily?: ProductFamily;
}

export const productFamilyResponseSchema: Schema<ProductFamilyResponse> = object(
  {
    productFamily: [
      'product_family',
      optional(lazy(() => productFamilySchema)),
    ],
  }
);
