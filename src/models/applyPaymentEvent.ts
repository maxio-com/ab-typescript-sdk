/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema.js';
import {
  ApplyPaymentEventData,
  applyPaymentEventDataSchema,
} from './applyPaymentEventData.js';
import { Invoice, invoiceSchema } from './invoice.js';
import {
  InvoiceEventType,
  invoiceEventTypeSchema,
} from './invoiceEventType.js';

export interface ApplyPaymentEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `apply_payment` event */
  eventData: ApplyPaymentEventData;
  [key: string]: unknown;
}

export const applyPaymentEventSchema: Schema<ApplyPaymentEvent> = lazy(() =>
  expandoObject({
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', invoiceSchema],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: ['event_data', applyPaymentEventDataSchema],
  })
);
