/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema } from '../schema';
import {
  SubscriptionMRRBreakout,
  subscriptionMRRBreakoutSchema,
} from './subscriptionMRRBreakout';

export interface SubscriptionMRR {
  subscriptionId: number;
  mrrAmountInCents: number;
  breakouts?: SubscriptionMRRBreakout;
}

export const subscriptionMRRSchema: Schema<SubscriptionMRR> = object({
  subscriptionId: ['subscription_id', number()],
  mrrAmountInCents: ['mrr_amount_in_cents', number()],
  breakouts: ['breakouts', optional(lazy(() => subscriptionMRRBreakoutSchema))],
});
