/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  CreateInvoicePaymentAmount,
  createInvoicePaymentAmountSchema,
} from './containers/createInvoicePaymentAmount';
import {
  InvoicePaymentMethodType,
  invoicePaymentMethodTypeSchema,
} from './invoicePaymentMethodType';

export interface CreateInvoicePayment {
  /** A string of the dollar amount to be refunded (eg. "10.50" => $10.50) */
  amount?: CreateInvoicePaymentAmount;
  /** A description to be attached to the payment. */
  memo?: string;
  /** The type of payment method used. */
  method?: InvoicePaymentMethodType;
  /** Additional information related to the payment method (eg. Check #) */
  details?: string;
}

export const createInvoicePaymentSchema: Schema<CreateInvoicePayment> = object({
  amount: ['amount', optional(createInvoicePaymentAmountSchema)],
  memo: ['memo', optional(string())],
  method: ['method', optional(invoicePaymentMethodTypeSchema)],
  details: ['details', optional(string())],
});
