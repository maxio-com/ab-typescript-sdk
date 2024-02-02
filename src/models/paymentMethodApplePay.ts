/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema } from '../schema';
import {
  InvoiceEventPaymentMethod,
  invoiceEventPaymentMethodSchema,
} from './invoiceEventPaymentMethod';

export interface PaymentMethodApplePay {
  type: InvoiceEventPaymentMethod;
}

export const paymentMethodApplePaySchema: Schema<PaymentMethodApplePay> = object(
  { type: ['type', invoiceEventPaymentMethodSchema] }
);
