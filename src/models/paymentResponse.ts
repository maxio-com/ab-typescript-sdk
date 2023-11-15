/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { InvoicePrePayment, invoicePrePaymentSchema } from './invoicePrePayment';
import { Payment, paymentSchema } from './payment';

export interface PaymentResponse {
  paidInvoices?: Payment[];
  prepayment?: InvoicePrePayment;
}

export const paymentResponseSchema: Schema<PaymentResponse> = object({
  paidInvoices: ['paid_invoices', optional(array(lazy(() => paymentSchema)))],
  prepayment: ['prepayment', optional(lazy(() => invoicePrePaymentSchema))],
});
