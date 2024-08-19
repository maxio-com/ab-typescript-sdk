/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { UpdateMetadata, updateMetadataSchema } from './updateMetadata';

export interface UpdateMetadataRequest {
  metadata?: UpdateMetadata;
  [key: string]: unknown;
}

export const updateMetadataRequestSchema: Schema<UpdateMetadataRequest> = expandoObject(
  { metadata: ['metadata', optional(lazy(() => updateMetadataSchema))] }
);
