/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';
import { PrepaymentMethod, prepaymentMethodSchema } from './prepaymentMethod';

export interface ListSubcriptionGroupPrepaymentItem {
  id?: number;
  subscriptionGroupUid?: string;
  amountInCents?: number;
  remainingAmountInCents?: number;
  details?: string;
  external?: boolean;
  memo?: string;
  /** :- When the `method` specified is `"credit_card_on_file"`, the prepayment amount will be collected using the default credit card payment profile and applied to the prepayment account balance. This is especially useful for manual replenishment of prepaid subscriptions. */
  paymentType?: PrepaymentMethod;
  createdAt?: string;
}

export const listSubcriptionGroupPrepaymentItemSchema: Schema<ListSubcriptionGroupPrepaymentItem> = object(
  {
    id: ['id', optional(number())],
    subscriptionGroupUid: ['subscription_group_uid', optional(string())],
    amountInCents: ['amount_in_cents', optional(number())],
    remainingAmountInCents: ['remaining_amount_in_cents', optional(number())],
    details: ['details', optional(string())],
    external: ['external', optional(boolean())],
    memo: ['memo', optional(string())],
    paymentType: ['payment_type', optional(prepaymentMethodSchema)],
    createdAt: ['created_at', optional(string())],
  }
);
