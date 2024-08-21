/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  number,
  optional,
  Schema,
} from '../schema';

export interface ListComponentsFilter {
  /** Allows fetching components with matching id based on provided value. Use in query `filter[ids]=1,2,3`. */
  ids?: number[];
  /** Allows fetching components with matching use_site_exchange_rate based on provided value (refers to default price point). Use in query `filter[use_site_exchange_rate]=true`. */
  useSiteExchangeRate?: boolean;
  [key: string]: unknown;
}

export const listComponentsFilterSchema: Schema<ListComponentsFilter> = expandoObject(
  {
    ids: ['ids', optional(array(number()))],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  }
);
