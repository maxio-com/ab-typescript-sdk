/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, number, optional, Schema } from '../schema';
import { InvoiceEvent, invoiceEventSchema } from './containers/invoiceEvent';

export interface ListInvoiceEventsResponse {
  events?: InvoiceEvent[];
  page?: number;
  perPage?: number;
  totalPages?: number;
  [key: string]: unknown;
}

export const listInvoiceEventsResponseSchema: Schema<ListInvoiceEventsResponse> = expandoObject(
  {
    events: ['events', optional(array(invoiceEventSchema))],
    page: ['page', optional(number())],
    perPage: ['per_page', optional(number())],
    totalPages: ['total_pages', optional(number())],
  }
);
