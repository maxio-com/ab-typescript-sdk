/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, number, optional, Schema } from '../schema';
import { Metafield, metafieldSchema } from './metafield';

export interface ListMetafieldsResponse {
  totalCount?: number;
  currentPage?: number;
  totalPages?: number;
  perPage?: number;
  metafields?: Metafield[];
  [key: string]: unknown;
}

export const listMetafieldsResponseSchema: Schema<ListMetafieldsResponse> = expandoObject(
  {
    totalCount: ['total_count', optional(number())],
    currentPage: ['current_page', optional(number())],
    totalPages: ['total_pages', optional(number())],
    perPage: ['per_page', optional(number())],
    metafields: ['metafields', optional(array(lazy(() => metafieldSchema)))],
  }
);
