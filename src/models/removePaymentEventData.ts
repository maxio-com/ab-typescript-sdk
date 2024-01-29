/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  RemovePaymentEventDataPaymentMethod,
  removePaymentEventDataPaymentMethodSchema,
} from './containers/removePaymentEventDataPaymentMethod';

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
  paymentMethod: RemovePaymentEventDataPaymentMethod;
  /** The flag that shows whether the original payment was a prepayment or not */
  prepayment: boolean;
}

export const removePaymentEventDataSchema: Schema<any> = object({
  transactionId: ['transaction_id', number()],
  memo: ['memo', string()],
  originalAmount: ['original_amount', optional(string())],
  appliedAmount: ['applied_amount', string()],
  transactionTime: ['transaction_time', string()],
  paymentMethod: [
    'payment_method',
    lazy(() => removePaymentEventDataPaymentMethodSchema),
  ],
  prepayment: ['prepayment', boolean()],
});
