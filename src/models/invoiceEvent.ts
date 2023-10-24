/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  InvoiceEventEventData,
  invoiceEventEventDataSchema,
} from './containers/invoiceEventEventData';
import { Invoice, invoiceSchema } from './invoice';
import { InvoiceEventType, invoiceEventTypeSchema } from './invoiceEventType';

export interface InvoiceEvent {
  id?: number;
  /** Invoice Event Type */
  eventType?: InvoiceEventType;
  /** The event data is the data that, when combined with the command, results in the output invoice found in the invoice field. */
  eventData?: InvoiceEventEventData;
  timestamp?: string;
  invoice?: Invoice;
}

export const invoiceEventSchema: Schema<InvoiceEvent> = object({
  id: ['id', optional(number())],
  eventType: ['event_type', optional(invoiceEventTypeSchema)],
  eventData: ['event_data', optional(lazy(() => invoiceEventEventDataSchema))],
  timestamp: ['timestamp', optional(string())],
  invoice: ['invoice', optional(lazy(() => invoiceSchema))],
});
