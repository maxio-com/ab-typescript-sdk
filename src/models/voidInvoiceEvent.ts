/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema.js';
import { Invoice, invoiceSchema } from './invoice.js';
import {
  InvoiceEventType,
  invoiceEventTypeSchema,
} from './invoiceEventType.js';
import {
  VoidInvoiceEventData,
  voidInvoiceEventDataSchema,
} from './voidInvoiceEventData.js';

export interface VoidInvoiceEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `void_invoice` event */
  eventData: VoidInvoiceEventData;
  [key: string]: unknown;
}

export const voidInvoiceEventSchema: Schema<VoidInvoiceEvent> = expandoObject({
  id: ['id', bigint()],
  timestamp: ['timestamp', string()],
  invoice: ['invoice', lazy(() => invoiceSchema)],
  eventType: ['event_type', invoiceEventTypeSchema],
  eventData: ['event_data', lazy(() => voidInvoiceEventDataSchema)],
});
