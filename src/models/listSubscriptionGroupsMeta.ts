/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface ListSubscriptionGroupsMeta {
  currentPage?: number;
  totalCount?: number;
}

export const listSubscriptionGroupsMetaSchema: Schema<ListSubscriptionGroupsMeta> = object(
  {
    currentPage: ['current_page', optional(number())],
    totalCount: ['total_count', optional(number())],
  }
);
