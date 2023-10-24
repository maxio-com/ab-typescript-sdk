/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface CreateMetadata {
  name?: string;
  value?: string;
}

export const createMetadataSchema: Schema<CreateMetadata> = object({
  name: ['name', optional(string())],
  value: ['value', optional(string())],
});
