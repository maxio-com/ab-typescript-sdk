/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CreateOrUpdateProduct,
  createOrUpdateProductSchema,
} from './createOrUpdateProduct';

export interface CreateOrUpdateProductRequest {
  product: CreateOrUpdateProduct;
}

export const createOrUpdateProductRequestSchema: Schema<CreateOrUpdateProductRequest> = object(
  { product: ['product', lazy(() => createOrUpdateProductSchema)] }
);
