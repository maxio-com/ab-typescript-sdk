/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema';
import {
  ApplyDebitNoteEventData,
  applyDebitNoteEventDataSchema,
} from './applyDebitNoteEventData';
import { Invoice, invoiceSchema } from './invoice';
import { InvoiceEventType, invoiceEventTypeSchema } from './invoiceEventType';

export interface ApplyDebitNoteEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `apply_debit_note` event */
  eventData: ApplyDebitNoteEventData;
  [key: string]: unknown;
}

export const applyDebitNoteEventSchema: Schema<ApplyDebitNoteEvent> = expandoObject(
  {
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', lazy(() => invoiceSchema)],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: ['event_data', lazy(() => applyDebitNoteEventDataSchema)],
  }
);
