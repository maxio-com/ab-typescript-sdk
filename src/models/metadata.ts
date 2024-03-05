/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface Metadata {
  id?: number | null;
  value?: string | null;
  resourceId?: number | null;
  name?: string;
  deletedAt?: string | null;
  metafieldId?: number | null;
  [key: string]: unknown;
}

export const metadataSchema: Schema<Metadata> = expandoObject({
  id: ['id', optional(nullable(number()))],
  value: ['value', optional(nullable(string()))],
  resourceId: ['resource_id', optional(nullable(number()))],
  name: ['name', optional(string())],
  deletedAt: ['deleted_at', optional(nullable(string()))],
  metafieldId: ['metafield_id', optional(nullable(number()))],
});
