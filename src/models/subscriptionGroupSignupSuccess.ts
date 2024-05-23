/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { Customer1, customer1Schema } from './customer1';
import {
  SubscriptionGroupSignupSuccessData,
  subscriptionGroupSignupSuccessDataSchema,
} from './subscriptionGroupSignupSuccessData';

export interface SubscriptionGroupSignupSuccess {
  subscriptionGroup: SubscriptionGroupSignupSuccessData;
  customer: Customer1;
  [key: string]: unknown;
}

export const subscriptionGroupSignupSuccessSchema: Schema<SubscriptionGroupSignupSuccess> = expandoObject(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => subscriptionGroupSignupSuccessDataSchema),
    ],
    customer: ['customer', lazy(() => customer1Schema)],
  }
);
