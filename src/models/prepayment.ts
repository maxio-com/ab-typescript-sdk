/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { PrepaymentMethod, prepaymentMethodSchema } from './prepaymentMethod';

export interface Prepayment {
  id: number;
  subscriptionId: number;
  amountInCents: bigint;
  remainingAmountInCents: bigint;
  refundedAmountInCents?: bigint;
  details?: string;
  external: boolean;
  memo: string;
  /** The payment type of the prepayment. */
  paymentType?: PrepaymentMethod;
  createdAt: string;
}

export const prepaymentSchema: Schema<Prepayment> = object({
  id: ['id', number()],
  subscriptionId: ['subscription_id', number()],
  amountInCents: ['amount_in_cents', bigint()],
  remainingAmountInCents: ['remaining_amount_in_cents', bigint()],
  refundedAmountInCents: ['refunded_amount_in_cents', optional(bigint())],
  details: ['details', optional(string())],
  external: ['external', boolean()],
  memo: ['memo', string()],
  paymentType: ['payment_type', optional(prepaymentMethodSchema)],
  createdAt: ['created_at', string()],
});
