/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoiceEventPayment,
  invoiceEventPaymentSchema,
} from './containers/invoiceEventPayment';

/** Example schema for an `remove_payment` event */
export interface RemovePaymentEventData {
  /** Transaction ID of the original payment that was removed */
  transactionId: number;
  /** Memo of the original payment */
  memo: string;
  /** Full amount of the original payment */
  originalAmount?: string;
  /** Applied amount of the original payment */
  appliedAmount: string;
  /** Transaction time of the original payment, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" */
  transactionTime: string;
  /** A nested data structure detailing the method of payment */
  paymentMethod: InvoiceEventPayment;
  /** The flag that shows whether the original payment was a prepayment or not */
  prepayment: boolean;
  [key: string]: unknown;
}

export const removePaymentEventDataSchema: Schema<RemovePaymentEventData> = expandoObject(
  {
    transactionId: ['transaction_id', number()],
    memo: ['memo', string()],
    originalAmount: ['original_amount', optional(string())],
    appliedAmount: ['applied_amount', string()],
    transactionTime: ['transaction_time', string()],
    paymentMethod: ['payment_method', invoiceEventPaymentSchema],
    prepayment: ['prepayment', boolean()],
  }
);
