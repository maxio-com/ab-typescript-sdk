/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import {
  ApplyPaymentEventDataPaymentMethod,
  applyPaymentEventDataPaymentMethodSchema,
} from './containers/applyPaymentEventDataPaymentMethod';

/** Example schema for an `apply_payment` event */
export interface ApplyPaymentEventData {
  /** The payment memo */
  memo?: string;
  /** The full, original amount of the payment transaction as a string in full units. Incoming payments can be split amongst several invoices, which will result in a `applied_amount` less than the `original_amount`. Example: A $100.99 payment, of which $40.11 is applied to this invoice, will have an `original_amount` of `"100.99"`. */
  originalAmount?: string;
  /** The amount of the payment applied to this invoice. Incoming payments can be split amongst several invoices, which will result in a `applied_amount` less than the `original_amount`. Example: A $100.99 payment, of which $40.11 is applied to this invoice, will have an `applied_amount` of `"40.11"`. */
  appliedAmount?: string;
  /** The time the payment was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" */
  transactionTime?: string;
  /** A nested data structure detailing the method of payment */
  paymentMethod?: ApplyPaymentEventDataPaymentMethod;
  /** The Chargify id of the original payment */
  transactionId?: number;
}

export const applyPaymentEventDataSchema: Schema<ApplyPaymentEventData> = object(
  {
    memo: ['memo', optional(string())],
    originalAmount: ['original_amount', optional(string())],
    appliedAmount: ['applied_amount', optional(string())],
    transactionTime: ['transaction_time', optional(string())],
    paymentMethod: [
      'payment_method',
      optional(applyPaymentEventDataPaymentMethodSchema),
    ],
    transactionId: ['transaction_id', optional(number())],
  }
);
