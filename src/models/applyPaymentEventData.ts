/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoiceEventPayment,
  invoiceEventPaymentSchema,
} from './containers/invoiceEventPayment';

/** Example schema for an `apply_payment` event */
export interface ApplyPaymentEventData {
  /** The payment memo */
  memo: string;
  /** The full, original amount of the payment transaction as a string in full units. Incoming payments can be split amongst several invoices, which will result in a `applied_amount` less than the `original_amount`. Example: A $100.99 payment, of which $40.11 is applied to this invoice, will have an `original_amount` of `"100.99"`. */
  originalAmount: string;
  /** The amount of the payment applied to this invoice. Incoming payments can be split amongst several invoices, which will result in a `applied_amount` less than the `original_amount`. Example: A $100.99 payment, of which $40.11 is applied to this invoice, will have an `applied_amount` of `"40.11"`. */
  appliedAmount: string;
  /** The time the payment was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" */
  transactionTime: string;
  /** A nested data structure detailing the method of payment */
  paymentMethod: InvoiceEventPayment;
  /** The Chargify id of the original payment */
  transactionId?: number;
  parentInvoiceNumber?: number | null;
  remainingPrepaymentAmount?: string | null;
  prepayment?: boolean;
  external?: boolean;
}

export const applyPaymentEventDataSchema: Schema<any> = object({
  memo: ['memo', string()],
  originalAmount: ['original_amount', string()],
  appliedAmount: ['applied_amount', string()],
  transactionTime: ['transaction_time', string()],
  paymentMethod: ['payment_method', lazy(() => invoiceEventPaymentSchema)],
  transactionId: ['transaction_id', optional(number())],
  parentInvoiceNumber: ['parent_invoice_number', optional(nullable(number()))],
  remainingPrepaymentAmount: [
    'remaining_prepayment_amount',
    optional(nullable(string())),
  ],
  prepayment: ['prepayment', optional(boolean())],
  external: ['external', optional(boolean())],
});
