/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { ServiceCreditType, serviceCreditTypeSchema } from './serviceCreditType';

export interface SubscriptionGroupPrepaymentResponse {
  id?: number;
  /** The amount in cents of the entry. */
  amountInCents?: number;
  /** The ending balance in cents of the account. */
  endingBalanceInCents?: number;
  /** The type of entry */
  entryType?: ServiceCreditType;
  /** A memo attached to the entry. */
  memo?: string;
}

export const subscriptionGroupPrepaymentResponseSchema: Schema<SubscriptionGroupPrepaymentResponse> = object(
  {
    id: ['id', optional(number())],
    amountInCents: ['amount_in_cents', optional(number())],
    endingBalanceInCents: ['ending_balance_in_cents', optional(number())],
    entryType: ['entry_type', optional(serviceCreditTypeSchema)],
    memo: ['memo', optional(string())],
  }
);
