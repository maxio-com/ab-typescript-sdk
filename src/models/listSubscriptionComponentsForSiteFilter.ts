/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import {
  SubscriptionFilter,
  subscriptionFilterSchema,
} from './subscriptionFilter';

export interface ListSubscriptionComponentsForSiteFilter {
  /** Allows fetching components allocation with matching currency based on provided values. Use in query `filter[currencies]=USD,EUR`. */
  currencies?: string[];
  /** Allows fetching components allocation with matching use_site_exchange_rate based on provided value. Use in query `filter[use_site_exchange_rate]=true`. */
  useSiteExchangeRate?: boolean;
  /** Nested filter used for List Subscription Components For Site Filter */
  subscription?: SubscriptionFilter;
  [key: string]: unknown;
}

export const listSubscriptionComponentsForSiteFilterSchema: Schema<ListSubscriptionComponentsForSiteFilter> = expandoObject(
  {
    currencies: ['currencies', optional(array(string()))],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
    subscription: [
      'subscription',
      optional(lazy(() => subscriptionFilterSchema)),
    ],
  }
);
