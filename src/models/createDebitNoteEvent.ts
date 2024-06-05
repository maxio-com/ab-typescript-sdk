/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema';
import { DebitNote, debitNoteSchema } from './debitNote';
import { Invoice, invoiceSchema } from './invoice';
import { InvoiceEventType, invoiceEventTypeSchema } from './invoiceEventType';

export interface CreateDebitNoteEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `create_debit_note` event */
  eventData: DebitNote;
  [key: string]: unknown;
}

export const createDebitNoteEventSchema: Schema<CreateDebitNoteEvent> = expandoObject(
  {
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', lazy(() => invoiceSchema)],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: ['event_data', lazy(() => debitNoteSchema)],
  }
);
