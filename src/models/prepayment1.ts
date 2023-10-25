/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';
import { PrepaymentMethod, prepaymentMethodSchema } from './prepaymentMethod';

export interface Prepayment1 {
  id: number;
  subscriptionId: number;
  amountInCents: number;
  remainingAmountInCents: number;
  refundedAmountInCents?: number;
  details?: string;
  external: boolean;
  memo: string;
  /** The payment type of the prepayment. */
  paymentType?: PrepaymentMethod;
  createdAt: string;
}

export const prepayment1Schema: Schema<Prepayment1> = object({
  id: ['id', number()],
  subscriptionId: ['subscription_id', number()],
  amountInCents: ['amount_in_cents', number()],
  remainingAmountInCents: ['remaining_amount_in_cents', number()],
  refundedAmountInCents: ['refunded_amount_in_cents', optional(number())],
  details: ['details', optional(string())],
  external: ['external', boolean()],
  memo: ['memo', string()],
  paymentType: ['payment_type', optional(prepaymentMethodSchema)],
  createdAt: ['created_at', string()],
});
