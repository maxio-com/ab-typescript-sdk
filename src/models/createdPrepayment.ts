/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface CreatedPrepayment {
  id?: bigint;
  subscriptionId?: number;
  amountInCents?: bigint;
  memo?: string;
  createdAt?: string;
  startingBalanceInCents?: bigint;
  endingBalanceInCents?: bigint;
  [key: string]: unknown;
}

export const createdPrepaymentSchema: Schema<CreatedPrepayment> = expandoObject(
  {
    id: ['id', optional(bigint())],
    subscriptionId: ['subscription_id', optional(number())],
    amountInCents: ['amount_in_cents', optional(bigint())],
    memo: ['memo', optional(string())],
    createdAt: ['created_at', optional(string())],
    startingBalanceInCents: ['starting_balance_in_cents', optional(bigint())],
    endingBalanceInCents: ['ending_balance_in_cents', optional(bigint())],
  }
);
