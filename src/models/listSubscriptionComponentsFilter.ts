/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  optional,
  Schema,
  string,
} from '../schema';

export interface ListSubscriptionComponentsFilter {
  /** Allows fetching components allocation with matching currency based on provided values. Use in query `filter[currencies]=EUR,USD`. */
  currencies?: string[];
  /** Allows fetching components allocation with matching use_site_exchange_rate based on provided value. Use in query `filter[use_site_exchange_rate]=true`. */
  useSiteExchangeRate?: boolean;
  [key: string]: unknown;
}

export const listSubscriptionComponentsFilterSchema: Schema<ListSubscriptionComponentsFilter> = expandoObject(
  {
    currencies: ['currencies', optional(array(string()))],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  }
);
