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
  IssueInvoiceEventData,
  issueInvoiceEventDataSchema,
} from './issueInvoiceEventData.js';

export interface IssueInvoiceEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `issue_invoice` event */
  eventData: IssueInvoiceEventData;
  [key: string]: unknown;
}

export const issueInvoiceEventSchema: Schema<IssueInvoiceEvent> = expandoObject(
  {
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', lazy(() => invoiceSchema)],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: ['event_data', lazy(() => issueInvoiceEventDataSchema)],
  }
);
