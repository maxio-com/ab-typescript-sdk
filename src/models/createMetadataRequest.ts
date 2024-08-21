/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import { CreateMetadata, createMetadataSchema } from './createMetadata';

export interface CreateMetadataRequest {
  metadata: CreateMetadata[];
  [key: string]: unknown;
}

export const createMetadataRequestSchema: Schema<CreateMetadataRequest> = expandoObject(
  { metadata: ['metadata', array(lazy(() => createMetadataSchema))] }
);
