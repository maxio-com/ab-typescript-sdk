/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  ListPrepaymentDateField,
  listPrepaymentDateFieldSchema,
} from './listPrepaymentDateField';

export interface ListPrepaymentsFilter {
  /** The type of filter you would like to apply to your search. `created_at` - Time when prepayment was created. `application_at` - Time when prepayment was applied to invoice. Use in query `filter[date_field]=created_at`. */
  dateField?: ListPrepaymentDateField;
  /** The start date (format YYYY-MM-DD) with which to filter the date_field. Returns prepayments with a timestamp at or after midnight (12:00:00 AM) in your site's time zone on the date specified. Use in query: `filter[start_date]=2011-12-15`. */
  startDate?: string;
  /** The end date (format YYYY-MM-DD) with which to filter the date_field. Returns prepayments with a timestamp up to and including 11:59:59PM in your site's time zone on the date specified. Use in query: `filter[end_date]=2011-12-15`. */
  endDate?: string;
  [key: string]: unknown;
}

export const listPrepaymentsFilterSchema: Schema<ListPrepaymentsFilter> = expandoObject(
  {
    dateField: ['date_field', optional(listPrepaymentDateFieldSchema)],
    startDate: ['start_date', optional(string())],
    endDate: ['end_date', optional(string())],
  }
);
