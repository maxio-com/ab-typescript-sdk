/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema';
import {
  ChangeChargebackStatusEventData,
  changeChargebackStatusEventDataSchema,
} from './changeChargebackStatusEventData';
import { Invoice, invoiceSchema } from './invoice';
import { InvoiceEventType, invoiceEventTypeSchema } from './invoiceEventType';

export interface ChangeChargebackStatusEvent {
  id: bigint;
  timestamp: string;
  invoice: Invoice;
  eventType: InvoiceEventType;
  /** Example schema for an `change_chargeback_status` event */
  eventData: ChangeChargebackStatusEventData;
  [key: string]: unknown;
}

export const changeChargebackStatusEventSchema: Schema<ChangeChargebackStatusEvent> = expandoObject(
  {
    id: ['id', bigint()],
    timestamp: ['timestamp', string()],
    invoice: ['invoice', lazy(() => invoiceSchema)],
    eventType: ['event_type', invoiceEventTypeSchema],
    eventData: [
      'event_data',
      lazy(() => changeChargebackStatusEventDataSchema),
    ],
  }
);
