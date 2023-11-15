/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, Schema } from '../schema';

export interface SubscriptionMRRBreakout {
  planAmountInCents: bigint;
  usageAmountInCents: bigint;
}

export const subscriptionMRRBreakoutSchema: Schema<SubscriptionMRRBreakout> = object(
  {
    planAmountInCents: ['plan_amount_in_cents', bigint()],
    usageAmountInCents: ['usage_amount_in_cents', bigint()],
  }
);
