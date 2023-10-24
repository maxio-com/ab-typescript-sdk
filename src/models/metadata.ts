/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface Metadata {
  id?: number;
  value?: string;
  resourceId?: number;
  name?: string;
  deletedAt?: string | null;
  metafieldId?: number;
}

export const metadataSchema: Schema<Metadata> = object({
  id: ['id', optional(number())],
  value: ['value', optional(string())],
  resourceId: ['resource_id', optional(number())],
  name: ['name', optional(string())],
  deletedAt: ['deleted_at', optional(nullable(string()))],
  metafieldId: ['metafield_id', optional(number())],
});
