/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema.js';
import {
  ApplyCreditNoteEventData,
  applyCreditNoteEventDataSchema,
} from './applyCreditNoteEventData.js';
import { Invoice, invoiceSchema } from './invoice.js';
import {
  InvoiceEventType,
  invoiceEventTypeSchema,
} from './invoiceEventType.js';

export interface ApplyCreditNoteEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `apply_credit_note` event */
  eventData: ApplyCreditNoteEventData;
  [key: string]: unknown;
}

export const applyCreditNoteEventSchema: Schema<ApplyCreditNoteEvent> = expandoObject(
  {
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', lazy(() => invoiceSchema)],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: ['event_data', lazy(() => applyCreditNoteEventDataSchema)],
  }
);
