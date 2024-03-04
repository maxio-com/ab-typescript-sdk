/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  SubscriptionGroupSignup,
  subscriptionGroupSignupSchema,
} from './subscriptionGroupSignup';

export interface SubscriptionGroupSignupRequest {
  subscriptionGroup: SubscriptionGroupSignup;
  [key: string]: unknown;
}

export const subscriptionGroupSignupRequestSchema: Schema<SubscriptionGroupSignupRequest> = expandoObject(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => subscriptionGroupSignupSchema),
    ],
  }
);
