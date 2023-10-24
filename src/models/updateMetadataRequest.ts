/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { UpdateMetadata, updateMetadataSchema } from './updateMetadata';

export interface UpdateMetadataRequest {
  metadata?: UpdateMetadata;
}

export const updateMetadataRequestSchema: Schema<UpdateMetadataRequest> = object(
  { metadata: ['metadata', optional(lazy(() => updateMetadataSchema))] }
);
