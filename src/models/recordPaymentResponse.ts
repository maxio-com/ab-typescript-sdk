/**
 * Maxio Advanced BillingLib
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
} from '../schema';
import { InvoicePrePayment, invoicePrePaymentSchema } from './invoicePrePayment';
import { PaidInvoice, paidInvoiceSchema } from './paidInvoice';

export interface RecordPaymentResponse {
  paidInvoices?: PaidInvoice[];
  prepayment?: InvoicePrePayment | null;
  [key: string]: unknown;
}

export const recordPaymentResponseSchema: Schema<RecordPaymentResponse> = expandoObject(
  {
    paidInvoices: [
      'paid_invoices',
      optional(array(lazy(() => paidInvoiceSchema))),
    ],
    prepayment: [
      'prepayment',
      optional(nullable(lazy(() => invoicePrePaymentSchema))),
    ],
  }
);
