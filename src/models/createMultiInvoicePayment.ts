/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CreateMultiInvoicePaymentAmount,
  createMultiInvoicePaymentAmountSchema,
} from './containers/createMultiInvoicePaymentAmount';
import {
  CreateInvoicePaymentApplication,
  createInvoicePaymentApplicationSchema,
} from './createInvoicePaymentApplication';
import {
  InvoicePaymentMethodType,
  invoicePaymentMethodTypeSchema,
} from './invoicePaymentMethodType';

export interface CreateMultiInvoicePayment {
  /** A description to be attached to the payment. */
  memo?: string;
  /** Additional information related to the payment method (eg. Check #). */
  details?: string;
  /** The type of payment method used. Defaults to other. */
  method?: InvoicePaymentMethodType;
  /** Dollar amount of the sum of the invoices payment (eg. "10.50" => $10.50). */
  amount: CreateMultiInvoicePaymentAmount;
  /** Date reflecting when the payment was received from a customer. Must be in the past. */
  receivedOn?: string;
  applications: CreateInvoicePaymentApplication[];
  [key: string]: unknown;
}

export const createMultiInvoicePaymentSchema: Schema<CreateMultiInvoicePayment> = expandoObject(
  {
    memo: ['memo', optional(string())],
    details: ['details', optional(string())],
    method: ['method', optional(invoicePaymentMethodTypeSchema)],
    amount: ['amount', createMultiInvoicePaymentAmountSchema],
    receivedOn: ['received_on', optional(string())],
    applications: [
      'applications',
      array(lazy(() => createInvoicePaymentApplicationSchema)),
    ],
  }
);
