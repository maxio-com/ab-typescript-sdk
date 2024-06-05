/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema';
import {
  ChangeInvoiceCollectionMethodEventData,
  changeInvoiceCollectionMethodEventDataSchema,
} from './changeInvoiceCollectionMethodEventData';
import { Invoice, invoiceSchema } from './invoice';
import { InvoiceEventType, invoiceEventTypeSchema } from './invoiceEventType';

export interface ChangeInvoiceCollectionMethodEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `change_invoice_collection_method` event */
  eventData: ChangeInvoiceCollectionMethodEventData;
  [key: string]: unknown;
}

export const changeInvoiceCollectionMethodEventSchema: Schema<ChangeInvoiceCollectionMethodEvent> = expandoObject(
  {
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', lazy(() => invoiceSchema)],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: [
      'event_data',
      lazy(() => changeInvoiceCollectionMethodEventDataSchema),
    ],
  }
);
