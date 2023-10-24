/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Customer, customerSchema } from './customer';
import {
  SubscriptionGroupSignupSuccessData,
  subscriptionGroupSignupSuccessDataSchema,
} from './subscriptionGroupSignupSuccessData';

export interface SubscriptionGroupSignupSuccess {
  subscriptionGroup: SubscriptionGroupSignupSuccessData;
  customer: Customer;
}

export const subscriptionGroupSignupSuccessSchema: Schema<SubscriptionGroupSignupSuccess> = object(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => subscriptionGroupSignupSuccessDataSchema),
    ],
    customer: ['customer', lazy(() => customerSchema)],
  }
);
