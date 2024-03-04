/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  CreateProductFamily,
  createProductFamilySchema,
} from './createProductFamily';

export interface CreateProductFamilyRequest {
  productFamily: CreateProductFamily;
  [key: string]: unknown;
}

export const createProductFamilyRequestSchema: Schema<CreateProductFamilyRequest> = expandoObject(
  { productFamily: ['product_family', lazy(() => createProductFamilySchema)] }
);
