/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface UpdateMetadata {
  currentName?: string;
  name?: string;
  value?: string;
}

export const updateMetadataSchema: Schema<UpdateMetadata> = object({
  currentName: ['current_name', optional(string())],
  name: ['name', optional(string())],
  value: ['value', optional(string())],
});
