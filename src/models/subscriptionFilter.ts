/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema';
import {
  SubscriptionListDateField,
  subscriptionListDateFieldSchema,
} from './subscriptionListDateField';
import {
  SubscriptionStateFilter,
  subscriptionStateFilterSchema,
} from './subscriptionStateFilter';

/** Nested filter used for List Subscription Components For Site Filter */
export interface SubscriptionFilter {
  /** Allows fetching components allocations that belong to the subscription with matching states based on provided values. To use this filter you also have to include the following param in the request `include=subscription`. Use in query `filter[subscription][states]=active,canceled&include=subscription`. */
  states?: SubscriptionStateFilter[];
  /** The type of filter you'd like to apply to your search. To use this filter you also have to include the following param in the request `include=subscription`. */
  dateField?: SubscriptionListDateField;
  /** The start date (format YYYY-MM-DD) with which to filter the date_field. Returns components that belong to the subscription with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. To use this filter you also have to include the following param in the request `include=subscription`. */
  startDate?: string;
  /** The end date (format YYYY-MM-DD) with which to filter the date_field. Returns components that belong to the subscription with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. To use this filter you also have to include the following param in the request `include=subscription`. */
  endDate?: string;
  /** The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components that belong to the subscription with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of start_date. To use this filter you also have to include the following param in the request `include=subscription`. */
  startDatetime?: string;
  /** The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components that belong to the subscription with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site''s time zone will be used. If provided, this parameter will be used instead of end_date. To use this filter you also have to include the following param in the request `include=subscription`. */
  endDatetime?: string;
  [key: string]: unknown;
}

export const subscriptionFilterSchema: Schema<SubscriptionFilter> = expandoObject(
  {
    states: ['states', optional(array(subscriptionStateFilterSchema))],
    dateField: ['date_field', optional(subscriptionListDateFieldSchema)],
    startDate: ['start_date', optional(string())],
    endDate: ['end_date', optional(string())],
    startDatetime: ['start_datetime', optional(string())],
    endDatetime: ['end_datetime', optional(string())],
  }
);
