/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema';
import { Invoice, invoiceSchema } from './invoice';
import { InvoiceEventType, invoiceEventTypeSchema } from './invoiceEventType';
import {
  RemovePaymentEventData,
  removePaymentEventDataSchema,
} from './removePaymentEventData';

export interface RemovePaymentEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `remove_payment` event */
  eventData: RemovePaymentEventData;
  [key: string]: unknown;
}

export const removePaymentEventSchema: Schema<RemovePaymentEvent> = expandoObject(
  {
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', lazy(() => invoiceSchema)],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: ['event_data', lazy(() => removePaymentEventDataSchema)],
  }
);
