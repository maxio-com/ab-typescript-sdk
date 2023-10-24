/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CreateProductFamily,
  createProductFamilySchema,
} from './createProductFamily';

export interface CreateProductFamilyRequest {
  productFamily: CreateProductFamily;
}

export const createProductFamilyRequestSchema: Schema<CreateProductFamilyRequest> = object(
  { productFamily: ['product_family', lazy(() => createProductFamilySchema)] }
);
