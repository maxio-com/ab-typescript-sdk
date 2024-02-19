/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, nullable, object, optional, Schema } from '../schema';
import {
  RecordPaymentResponsePrepayment,
  recordPaymentResponsePrepaymentSchema,
} from './containers/recordPaymentResponsePrepayment';
import { PaidInvoice, paidInvoiceSchema } from './paidInvoice';

export interface RecordPaymentResponse {
  paidInvoices?: PaidInvoice[];
  prepayment?: RecordPaymentResponsePrepayment | null;
}

export const recordPaymentResponseSchema: Schema<RecordPaymentResponse> = object(
  {
    paidInvoices: [
      'paid_invoices',
      optional(array(lazy(() => paidInvoiceSchema))),
    ],
    prepayment: [
      'prepayment',
      optional(nullable(lazy(() => recordPaymentResponsePrepaymentSchema))),
    ],
  }
);
