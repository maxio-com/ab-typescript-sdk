/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
} from '../schema';
import {
  SubscriptionMRRBreakout,
  subscriptionMRRBreakoutSchema,
} from './subscriptionMRRBreakout';

export interface SubscriptionMRR {
  subscriptionId: number;
  mrrAmountInCents: bigint;
  breakouts?: SubscriptionMRRBreakout;
  [key: string]: unknown;
}

export const subscriptionMRRSchema: Schema<SubscriptionMRR> = expandoObject({
  subscriptionId: ['subscription_id', number()],
  mrrAmountInCents: ['mrr_amount_in_cents', bigint()],
  breakouts: ['breakouts', optional(lazy(() => subscriptionMRRBreakoutSchema))],
});
