/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';
import {
  InvoiceEventPaymentMethod,
  invoiceEventPaymentMethodSchema,
} from './invoiceEventPaymentMethod';

export interface PaymentMethodPaypal {
  email: string;
  type: InvoiceEventPaymentMethod;
}

export const paymentMethodPaypalSchema: Schema<PaymentMethodPaypal> = object({
  email: ['email', string()],
  type: ['type', invoiceEventPaymentMethodSchema],
});
