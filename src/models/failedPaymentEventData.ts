/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoicePaymentMethodType,
  invoicePaymentMethodTypeSchema,
} from './invoicePaymentMethodType';

/** Example schema for an `failed_payment` event */
export interface FailedPaymentEventData {
  /** The monetary value of the payment, expressed in cents. */
  amountInCents: number;
  /** The monetary value of the payment, expressed in dollars. */
  appliedAmount: number;
  /** The memo passed when the payment was created. */
  memo?: string | null;
  paymentMethod: InvoicePaymentMethodType;
  /** The transaction ID of the failed payment. */
  transactionId: number;
  [key: string]: unknown;
}

export const failedPaymentEventDataSchema: Schema<FailedPaymentEventData> = expandoObject(
  {
    amountInCents: ['amount_in_cents', number()],
    appliedAmount: ['applied_amount', number()],
    memo: ['memo', optional(nullable(string()))],
    paymentMethod: ['payment_method', invoicePaymentMethodTypeSchema],
    transactionId: ['transaction_id', number()],
  }
);
