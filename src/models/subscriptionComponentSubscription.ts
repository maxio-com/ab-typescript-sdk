/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** An optional object, will be returned if provided `include=subscription` query param. */
export interface SubscriptionComponentSubscription {
  state?: string;
  updatedAt?: string;
}

export const subscriptionComponentSubscriptionSchema: Schema<SubscriptionComponentSubscription> = object(
  {
    state: ['state', optional(string())],
    updatedAt: ['updated_at', optional(string())],
  }
);
