/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface CreateMetadata {
  name?: string;
  value?: string;
  [key: string]: unknown;
}

export const createMetadataSchema: Schema<CreateMetadata> = expandoObject({
  name: ['name', optional(string())],
  value: ['value', optional(string())],
});
