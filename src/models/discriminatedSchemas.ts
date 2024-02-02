/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { discriminatedObject, Schema } from '../schema';
import { invoiceEventPaymentSchema } from './invoiceEventPayment';
import { invoiceEventPayment1Schema } from './invoiceEventPayment1';

export const discriminatedInvoiceEventPaymentSchema: Schema<any> = discriminatedObject(
  'type',
  'type',
  {
    'Invoice Event Payment': invoiceEventPaymentSchema,
 },
  'Invoice Event Payment'
);

export const discriminatedInvoiceEventPayment1Schema: Schema<any> = discriminatedObject(
  'type',
  'type',
  {
    'Invoice Event Payment1': invoiceEventPayment1Schema,
 },
  'Invoice Event Payment1'
);

