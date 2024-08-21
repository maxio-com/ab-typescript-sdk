/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import {
  InvoiceEventPaymentMethod,
  invoiceEventPaymentMethodSchema,
} from './invoiceEventPaymentMethod';

export interface PaymentMethodPaypal {
  email: string;
  type: InvoiceEventPaymentMethod;
  [key: string]: unknown;
}

export const paymentMethodPaypalSchema: Schema<PaymentMethodPaypal> = expandoObject(
  {
    email: ['email', string()],
    type: ['type', invoiceEventPaymentMethodSchema],
  }
);
