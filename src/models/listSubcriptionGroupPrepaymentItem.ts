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

export interface ListSubcriptionGroupPrepaymentItem {
  id?: number;
  subscriptionGroupUid?: string;
  amountInCents?: bigint;
  remainingAmountInCents?: bigint;
  details?: string;
  external?: boolean;
  memo?: string;
  paymentType?: PrepaymentMethod;
  createdAt?: string;
}

export const listSubcriptionGroupPrepaymentItemSchema: Schema<ListSubcriptionGroupPrepaymentItem> = object(
  {
    id: ['id', optional(number())],
    subscriptionGroupUid: ['subscription_group_uid', optional(string())],
    amountInCents: ['amount_in_cents', optional(bigint())],
    remainingAmountInCents: ['remaining_amount_in_cents', optional(bigint())],
    details: ['details', optional(string())],
    external: ['external', optional(boolean())],
    memo: ['memo', optional(string())],
    paymentType: ['payment_type', optional(prepaymentMethodSchema)],
    createdAt: ['created_at', optional(string())],
  }
);
