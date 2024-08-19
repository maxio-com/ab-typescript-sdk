/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface UpdateMetadata {
  currentName?: string;
  name?: string;
  value?: string;
  [key: string]: unknown;
}

export const updateMetadataSchema: Schema<UpdateMetadata> = expandoObject({
  currentName: ['current_name', optional(string())],
  name: ['name', optional(string())],
  value: ['value', optional(string())],
});
