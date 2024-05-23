/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ApplyCreditNoteEventData1,
  applyCreditNoteEventData1Schema,
} from './applyCreditNoteEventData1';
import { Invoice1, invoice1Schema } from './invoice1';

export interface InvoiceEvent {
  id?: bigint;
  timestamp?: string;
  invoice?: Invoice1;
  eventType?: string;
  /** Example schema for an `apply_credit_note` event */
  eventData?: ApplyCreditNoteEventData1;
  [key: string]: unknown;
}

export const invoiceEventSchema: Schema<any> = expandoObject({
  id: ['id', optional(bigint())],
  timestamp: ['timestamp', optional(string())],
  invoice: ['invoice', optional(lazy(() => invoice1Schema))],
  eventType: ['event_type', optional(string())],
  eventData: [
    'event_data',
    optional(lazy(() => applyCreditNoteEventData1Schema)),
  ],
});
