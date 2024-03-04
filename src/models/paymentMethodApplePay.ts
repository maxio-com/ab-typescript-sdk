/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema } from '../schema';
import {
  InvoiceEventPaymentMethod,
  invoiceEventPaymentMethodSchema,
} from './invoiceEventPaymentMethod';

export interface PaymentMethodApplePay {
  type: InvoiceEventPaymentMethod;
  [key: string]: unknown;
}

export const paymentMethodApplePaySchema: Schema<PaymentMethodApplePay> = expandoObject(
  { type: ['type', invoiceEventPaymentMethodSchema] }
);
