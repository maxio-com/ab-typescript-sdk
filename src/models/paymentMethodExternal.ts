/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, Schema, string } from '../schema';
import {
  InvoiceEventPaymentMethod,
  invoiceEventPaymentMethodSchema,
} from './invoiceEventPaymentMethod';

export interface PaymentMethodExternal {
  details: string | null;
  kind: string;
  memo: string | null;
  type: InvoiceEventPaymentMethod;
  [key: string]: unknown;
}

export const paymentMethodExternalSchema: Schema<PaymentMethodExternal> = expandoObject(
  {
    details: ['details', nullable(string())],
    kind: ['kind', string()],
    memo: ['memo', nullable(string())],
    type: ['type', invoiceEventPaymentMethodSchema],
  }
);
