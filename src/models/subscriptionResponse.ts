/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Subscription, subscriptionSchema } from './subscription';

export interface SubscriptionResponse {
  subscription?: Subscription;
  [key: string]: unknown;
}

export const subscriptionResponseSchema: Schema<SubscriptionResponse> = expandoObject(
  { subscription: ['subscription', optional(lazy(() => subscriptionSchema))] }
);
