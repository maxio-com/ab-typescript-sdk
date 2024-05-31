/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema';
import { Invoice, invoiceSchema } from './invoice';
import { InvoiceEventType, invoiceEventTypeSchema } from './invoiceEventType';
import {
  RefundInvoiceEventData,
  refundInvoiceEventDataSchema,
} from './refundInvoiceEventData';

export interface RefundInvoiceEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `refund_invoice` event */
  eventData: RefundInvoiceEventData;
  [key: string]: unknown;
}

export const refundInvoiceEventSchema: Schema<RefundInvoiceEvent> = expandoObject(
  {
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', lazy(() => invoiceSchema)],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: ['event_data', lazy(() => refundInvoiceEventDataSchema)],
  }
);
