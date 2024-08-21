/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, number, optional, Schema } from '../schema';

export interface ListMrrFilter {
  /** Submit ids in order to limit results. Use in query: `filter[subscription_ids]=1,2,3`. */
  subscriptionIds?: number[];
  [key: string]: unknown;
}

export const listMrrFilterSchema: Schema<ListMrrFilter> = expandoObject({
  subscriptionIds: ['subscription_ids', optional(array(number()))],
});
