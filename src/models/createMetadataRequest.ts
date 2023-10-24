/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { CreateMetadata, createMetadataSchema } from './createMetadata';

export interface CreateMetadataRequest {
  metadata: CreateMetadata[];
}

export const createMetadataRequestSchema: Schema<CreateMetadataRequest> = object(
  { metadata: ['metadata', array(lazy(() => createMetadataSchema))] }
);
