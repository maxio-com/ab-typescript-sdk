/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import { InvoiceEvent, invoiceEventSchema } from './invoiceEvent';

export interface ListInvoiceEventsResponse {
  events?: InvoiceEvent[];
  page?: number;
  perPage?: number;
  totalPages?: number;
}

export const listInvoiceEventsResponseSchema: Schema<ListInvoiceEventsResponse> = object(
  {
    events: ['events', optional(array(lazy(() => invoiceEventSchema)))],
    page: ['page', optional(number())],
    perPage: ['per_page', optional(number())],
    totalPages: ['total_pages', optional(number())],
  }
);
