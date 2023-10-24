/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface SubscriptionMRRBreakout {
  planAmountInCents: number;
  usageAmountInCents: number;
}

export const subscriptionMRRBreakoutSchema: Schema<SubscriptionMRRBreakout> = object(
  {
    planAmountInCents: ['plan_amount_in_cents', number()],
    usageAmountInCents: ['usage_amount_in_cents', number()],
  }
);
