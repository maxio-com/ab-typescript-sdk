/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, Schema } from '../schema';

export interface SubscriptionMRRBreakout {
  planAmountInCents: bigint;
  usageAmountInCents: bigint;
  [key: string]: unknown;
}

export const subscriptionMRRBreakoutSchema: Schema<SubscriptionMRRBreakout> = expandoObject(
  {
    planAmountInCents: ['plan_amount_in_cents', bigint()],
    usageAmountInCents: ['usage_amount_in_cents', bigint()],
  }
);
