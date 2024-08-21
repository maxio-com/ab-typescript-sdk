/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface SubscriptionStateChange {
  previousSubscriptionState: string;
  newSubscriptionState: string;
  [key: string]: unknown;
}

export const subscriptionStateChangeSchema: Schema<SubscriptionStateChange> = expandoObject(
  {
    previousSubscriptionState: ['previous_subscription_state', string()],
    newSubscriptionState: ['new_subscription_state', string()],
  }
);
