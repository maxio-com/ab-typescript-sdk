/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';

export interface ListSubscriptionGroupsMeta {
  currentPage?: number;
  totalCount?: number;
  [key: string]: unknown;
}

export const listSubscriptionGroupsMetaSchema: Schema<ListSubscriptionGroupsMeta> = expandoObject(
  {
    currentPage: ['current_page', optional(number())],
    totalCount: ['total_count', optional(number())],
  }
);
