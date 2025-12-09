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
  VoidRemainderEventData,
  voidRemainderEventDataSchema,
} from './voidRemainderEventData.js';

export interface VoidRemainderEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `void_remainder` event */
  eventData: VoidRemainderEventData;
  [key: string]: unknown;
}

export const voidRemainderEventSchema: Schema<VoidRemainderEvent> = lazy(() =>
  expandoObject({
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', invoiceSchema],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: ['event_data', voidRemainderEventDataSchema],
  })
);
