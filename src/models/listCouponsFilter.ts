/**
 * Maxio Advanced BillingLib
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
  string,
} from '../schema';
import { BasicDateField, basicDateFieldSchema } from './basicDateField';

export interface ListCouponsFilter {
  /** The type of filter you would like to apply to your search. Use in query `filter[date_field]=created_at`. */
  dateField?: BasicDateField;
  /** The start date (format YYYY-MM-DD) with which to filter the date_field. Returns coupons with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. Use in query `filter[start_date]=2011-12-17`. */
  startDate?: string;
  /** The end date (format YYYY-MM-DD) with which to filter the date_field. Returns coupons with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. Use in query `filter[end_date]=2011-12-15`. */
  endDate?: string;
  /** The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns coupons with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. Use in query `filter[start_datetime]=2011-12-19T10:15:30+01:00`. */
  startDatetime?: string;
  /** The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns coupons with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. Use in query `filter[end_datetime]=2011-12-1T10:15:30+01:00`. */
  endDatetime?: string;
  /** Allows fetching coupons with matching id based on provided values. Use in query `filter[ids]=1,2,3`. */
  ids?: number[];
  /** Allows fetching coupons with matching codes based on provided values. Use in query `filter[codes]=free,free_trial`. */
  codes?: string[];
  /** Allows fetching coupons with matching use_site_exchange_rate based on provided value. Use in query `filter[use_site_exchange_rate]=true`. */
  useSiteExchangeRate?: boolean;
  [key: string]: unknown;
}

export const listCouponsFilterSchema: Schema<ListCouponsFilter> = expandoObject(
  {
    dateField: ['date_field', optional(basicDateFieldSchema)],
    startDate: ['start_date', optional(string())],
    endDate: ['end_date', optional(string())],
    startDatetime: ['start_datetime', optional(string())],
    endDatetime: ['end_datetime', optional(string())],
    ids: ['ids', optional(array(number()))],
    codes: ['codes', optional(array(string()))],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  }
);
