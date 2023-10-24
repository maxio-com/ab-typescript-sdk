/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface SubscriptionStateChange {
  previousSubscriptionState: string;
  newSubscriptionState: string;
}

export const subscriptionStateChangeSchema: Schema<SubscriptionStateChange> = object(
  {
    previousSubscriptionState: ['previous_subscription_state', string()],
    newSubscriptionState: ['new_subscription_state', string()],
  }
);
