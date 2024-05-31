/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema';
import {
  ChangeInvoiceStatusEventData,
  changeInvoiceStatusEventDataSchema,
} from './changeInvoiceStatusEventData';
import { Invoice, invoiceSchema } from './invoice';
import { InvoiceEventType, invoiceEventTypeSchema } from './invoiceEventType';

export interface ChangeInvoiceStatusEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `change_invoice_status` event */
  eventData: ChangeInvoiceStatusEventData;
  [key: string]: unknown;
}

export const changeInvoiceStatusEventSchema: Schema<ChangeInvoiceStatusEvent> = expandoObject(
  {
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', lazy(() => invoiceSchema)],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: ['event_data', lazy(() => changeInvoiceStatusEventDataSchema)],
  }
);
