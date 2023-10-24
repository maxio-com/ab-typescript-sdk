/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Subscription, subscriptionSchema } from './subscription';

export interface SubscriptionResponse {
  subscription?: Subscription;
}

export const subscriptionResponseSchema: Schema<SubscriptionResponse> = object({
  subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
});
