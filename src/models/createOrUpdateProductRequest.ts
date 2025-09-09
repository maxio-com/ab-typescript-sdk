/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  CreateOrUpdateProduct,
  createOrUpdateProductSchema,
} from './createOrUpdateProduct.js';

export interface CreateOrUpdateProductRequest {
  product: CreateOrUpdateProduct;
  [key: string]: unknown;
}

export const createOrUpdateProductRequestSchema: Schema<CreateOrUpdateProductRequest> = expandoObject(
  { product: ['product', lazy(() => createOrUpdateProductSchema)] }
);
