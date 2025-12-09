/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema.js';
import {
  ChangeInvoiceCollectionMethodEventData,
  changeInvoiceCollectionMethodEventDataSchema,
} from './changeInvoiceCollectionMethodEventData.js';
import { Invoice, invoiceSchema } from './invoice.js';
import {
  InvoiceEventType,
  invoiceEventTypeSchema,
} from './invoiceEventType.js';

export interface ChangeInvoiceCollectionMethodEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `change_invoice_collection_method` event */
  eventData: ChangeInvoiceCollectionMethodEventData;
  [key: string]: unknown;
}

export const changeInvoiceCollectionMethodEventSchema: Schema<ChangeInvoiceCollectionMethodEvent> = lazy(
  () =>
    expandoObject({
      id: ['id', bigint()],
      timestamp: ['timestamp', string()],
      invoice: ['invoice', invoiceSchema],
      eventType: ['event_type', invoiceEventTypeSchema],
      eventData: ['event_data', changeInvoiceCollectionMethodEventDataSchema],
    })
);
