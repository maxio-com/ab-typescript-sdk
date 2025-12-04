/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { Subscription, subscriptionSchema } from './subscription.js';

export interface SubscriptionResponse {
  subscription?: Subscription;
  [key: string]: unknown;
}

export const subscriptionResponseSchema: Schema<SubscriptionResponse> = lazy(
  () =>
    expandoObject({
      subscription: ['subscription', optional(subscriptionSchema)],
    })
);
