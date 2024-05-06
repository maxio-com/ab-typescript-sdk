/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { BasicDateField, basicDateFieldSchema } from './basicDateField';
import {
  IncludeNullOrNotNull,
  includeNullOrNotNullSchema,
} from './includeNullOrNotNull';
import { PricePointType, pricePointTypeSchema } from './pricePointType';

export interface ListPricePointsFilter {
  /** The type of filter you would like to apply to your search. Use in query: `filter[date_field]=created_at`. */
  dateField?: BasicDateField;
  /** The start date (format YYYY-MM-DD) with which to filter the date_field. Returns price points with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. */
  startDate?: string;
  /** The end date (format YYYY-MM-DD) with which to filter the date_field. Returns price points with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. */
  endDate?: string;
  /** The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns price points with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. */
  startDatetime?: string;
  /** The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns price points with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. */
  endDatetime?: string;
  /** Allows fetching price points with matching type. Use in query: `filter[type]=custom,catalog`. */
  type?: PricePointType[];
  /** Allows fetching price points with matching id based on provided values. Use in query: `filter[ids]=1,2,3`. */
  ids?: number[];
  /** Allows fetching price points only if archived_at is present or not. Use in query: `filter[archived_at]=not_null`. */
  archivedAt?: IncludeNullOrNotNull;
  [key: string]: unknown;
}

export const listPricePointsFilterSchema: Schema<ListPricePointsFilter> = expandoObject(
  {
    dateField: ['date_field', optional(basicDateFieldSchema)],
    startDate: ['start_date', optional(string())],
    endDate: ['end_date', optional(string())],
    startDatetime: ['start_datetime', optional(string())],
    endDatetime: ['end_datetime', optional(string())],
    type: ['type', optional(array(pricePointTypeSchema))],
    ids: ['ids', optional(array(number()))],
    archivedAt: ['archived_at', optional(includeNullOrNotNullSchema)],
  }
);
