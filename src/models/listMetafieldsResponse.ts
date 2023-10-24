/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import { Metafield, metafieldSchema } from './metafield';

export interface ListMetafieldsResponse {
  totalCount?: number;
  currentPage?: number;
  totalPages?: number;
  perPage?: number;
  metafields?: Metafield[];
}

export const listMetafieldsResponseSchema: Schema<ListMetafieldsResponse> = object(
  {
    totalCount: ['total_count', optional(number())],
    currentPage: ['current_page', optional(number())],
    totalPages: ['total_pages', optional(number())],
    perPage: ['per_page', optional(number())],
    metafields: ['metafields', optional(array(lazy(() => metafieldSchema)))],
  }
);
