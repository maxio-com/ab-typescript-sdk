/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface ListPublicKeysMeta {
  totalCount?: number;
  currentPage?: number;
  totalPages?: number;
  perPage?: number;
}

export const listPublicKeysMetaSchema: Schema<ListPublicKeysMeta> = object({
  totalCount: ['total_count', optional(number())],
  currentPage: ['current_page', optional(number())],
  totalPages: ['total_pages', optional(number())],
  perPage: ['per_page', optional(number())],
});
