/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema';
import { Invoice, invoiceSchema } from './invoice';
import { InvoiceEventType, invoiceEventTypeSchema } from './invoiceEventType';
import {
  VoidRemainderEventData,
  voidRemainderEventDataSchema,
} from './voidRemainderEventData';

export interface VoidRemainderEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `void_remainder` event */
  eventData: VoidRemainderEventData;
  [key: string]: unknown;
}

export const voidRemainderEventSchema: Schema<VoidRemainderEvent> = expandoObject(
  {
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', lazy(() => invoiceSchema)],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: ['event_data', lazy(() => voidRemainderEventDataSchema)],
  }
);
