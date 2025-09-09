/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  SubscriptionGroupSignup,
  subscriptionGroupSignupSchema,
} from './subscriptionGroupSignup.js';

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
