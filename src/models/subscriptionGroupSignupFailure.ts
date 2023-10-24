/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, Schema, string } from '../schema';
import {
  SubscriptionGroupSignupFailureData,
  subscriptionGroupSignupFailureDataSchema,
} from './subscriptionGroupSignupFailureData';

export interface SubscriptionGroupSignupFailure {
  subscriptionGroup: SubscriptionGroupSignupFailureData;
  customer: string | null;
}

export const subscriptionGroupSignupFailureSchema: Schema<SubscriptionGroupSignupFailure> = object(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => subscriptionGroupSignupFailureDataSchema),
    ],
    customer: ['customer', nullable(string())],
  }
);
