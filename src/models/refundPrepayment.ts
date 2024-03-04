/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  expandoObject,
  optional,
  Schema,
  string,
} from '../schema';
import {
  RefundPrepaymentAmount,
  refundPrepaymentAmountSchema,
} from './containers/refundPrepaymentAmount';

export interface RefundPrepayment {
  /** `amount` is not required if you pass `amount_in_cents`. */
  amountInCents: bigint;
  /** `amount_in_cents` is not required if you pass `amount`. */
  amount: RefundPrepaymentAmount;
  memo: string;
  /** Specify the type of refund you wish to initiate. When the prepayment is external, the `external` flag is optional. But if the prepayment was made through a payment profile, the `external` flag is required. */
  external?: boolean;
  [key: string]: unknown;
}

export const refundPrepaymentSchema: Schema<RefundPrepayment> = expandoObject({
  amountInCents: ['amount_in_cents', bigint()],
  amount: ['amount', refundPrepaymentAmountSchema],
  memo: ['memo', string()],
  external: ['external', optional(boolean())],
});
