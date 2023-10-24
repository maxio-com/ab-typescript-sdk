/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface CreatedPrepayment {
  id?: number;
  subscriptionId?: number;
  amountInCents?: number;
  memo?: string;
  createdAt?: string;
  startingBalanceInCents?: number;
  endingBalanceInCents?: number;
}

export const createdPrepaymentSchema: Schema<CreatedPrepayment> = object({
  id: ['id', optional(number())],
  subscriptionId: ['subscription_id', optional(number())],
  amountInCents: ['amount_in_cents', optional(number())],
  memo: ['memo', optional(string())],
  createdAt: ['created_at', optional(string())],
  startingBalanceInCents: ['starting_balance_in_cents', optional(number())],
  endingBalanceInCents: ['ending_balance_in_cents', optional(number())],
});
