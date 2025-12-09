/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  CreateProductFamily,
  createProductFamilySchema,
} from './createProductFamily.js';

export interface CreateProductFamilyRequest {
  productFamily: CreateProductFamily;
  [key: string]: unknown;
}

export const createProductFamilyRequestSchema: Schema<CreateProductFamilyRequest> = lazy(
  () =>
    expandoObject({
      productFamily: ['product_family', createProductFamilySchema],
    })
);
