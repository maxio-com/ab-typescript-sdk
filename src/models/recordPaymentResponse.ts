/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  nullable,
  optional,
  Schema,
} from '../schema.js';
import {
  InvoicePrePayment,
  invoicePrePaymentSchema,
} from './invoicePrePayment.js';
import { PaidInvoice, paidInvoiceSchema } from './paidInvoice.js';

export interface RecordPaymentResponse {
  paidInvoices?: PaidInvoice[];
  prepayment?: InvoicePrePayment | null;
  [key: string]: unknown;
}

export const recordPaymentResponseSchema: Schema<RecordPaymentResponse> = lazy(
  () =>
    expandoObject({
      paidInvoices: ['paid_invoices', optional(array(paidInvoiceSchema))],
      prepayment: ['prepayment', optional(nullable(invoicePrePaymentSchema))],
    })
);
