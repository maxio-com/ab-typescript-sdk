/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Payment, paymentSchema } from './payment';
import { PrePayment, prePaymentSchema } from './prePayment';

export interface PaymentResponse {
  paidInvoices?: Payment[];
  prepayment?: PrePayment;
}

export const paymentResponseSchema: Schema<PaymentResponse> = object({
  paidInvoices: ['paid_invoices', optional(array(lazy(() => paymentSchema)))],
  prepayment: ['prepayment', optional(lazy(() => prePaymentSchema))],
});
