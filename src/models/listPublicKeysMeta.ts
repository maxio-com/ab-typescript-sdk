/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';

export interface ListPublicKeysMeta {
  totalCount?: number;
  currentPage?: number;
  totalPages?: number;
  perPage?: number;
  [key: string]: unknown;
}

export const listPublicKeysMetaSchema: Schema<ListPublicKeysMeta> = expandoObject(
  {
    totalCount: ['total_count', optional(number())],
    currentPage: ['current_page', optional(number())],
    totalPages: ['total_pages', optional(number())],
    perPage: ['per_page', optional(number())],
  }
);
