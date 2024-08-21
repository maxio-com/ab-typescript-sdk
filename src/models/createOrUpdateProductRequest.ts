/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  CreateOrUpdateProduct,
  createOrUpdateProductSchema,
} from './createOrUpdateProduct';

export interface CreateOrUpdateProductRequest {
  product: CreateOrUpdateProduct;
  [key: string]: unknown;
}

export const createOrUpdateProductRequestSchema: Schema<CreateOrUpdateProductRequest> = expandoObject(
  { product: ['product', lazy(() => createOrUpdateProductSchema)] }
);
