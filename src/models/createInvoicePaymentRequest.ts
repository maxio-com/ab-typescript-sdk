/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  CreateInvoicePayment,
  createInvoicePaymentSchema,
} from './createInvoicePayment';
import {
  InvoicePaymentType,
  invoicePaymentTypeSchema,
} from './invoicePaymentType';

export interface CreateInvoicePaymentRequest {
  payment: CreateInvoicePayment;
  /** The type of payment to be applied to an Invoice. */
  type?: InvoicePaymentType;
}

export const createInvoicePaymentRequestSchema: Schema<CreateInvoicePaymentRequest> = object(
  {
    payment: ['payment', lazy(() => createInvoicePaymentSchema)],
    type: ['type', optional(invoicePaymentTypeSchema)],
  }
);
