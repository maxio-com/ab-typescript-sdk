/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema.js';
import {
  ApplyDebitNoteEventData,
  applyDebitNoteEventDataSchema,
} from './applyDebitNoteEventData.js';
import { Invoice, invoiceSchema } from './invoice.js';
import {
  InvoiceEventType,
  invoiceEventTypeSchema,
} from './invoiceEventType.js';

export interface ApplyDebitNoteEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `apply_debit_note` event */
  eventData: ApplyDebitNoteEventData;
  [key: string]: unknown;
}

export const applyDebitNoteEventSchema: Schema<ApplyDebitNoteEvent> = lazy(() =>
  expandoObject({
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', invoiceSchema],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: ['event_data', applyDebitNoteEventDataSchema],
  })
);
