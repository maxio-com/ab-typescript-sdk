/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema } from '../schema.js';
import {
  CreateMetafieldsRequestMetafields,
  createMetafieldsRequestMetafieldsSchema,
} from './containers/createMetafieldsRequestMetafields.js';

export interface CreateMetafieldsRequest {
  metafields: CreateMetafieldsRequestMetafields;
  [key: string]: unknown;
}

export const createMetafieldsRequestSchema: Schema<CreateMetafieldsRequest> = expandoObject(
  { metafields: ['metafields', createMetafieldsRequestMetafieldsSchema] }
);
