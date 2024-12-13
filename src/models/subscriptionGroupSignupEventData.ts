/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, nullable, Schema } from '../schema';
import { Customer, customerSchema } from './customer';
import {
  SubscriptionGroupSignupFailureData,
  subscriptionGroupSignupFailureDataSchema,
} from './subscriptionGroupSignupFailureData';

export interface SubscriptionGroupSignupEventData {
  subscriptionGroup: SubscriptionGroupSignupFailureData;
  customer: Customer | null;
  [key: string]: unknown;
}

export const subscriptionGroupSignupEventDataSchema: Schema<SubscriptionGroupSignupEventData> = expandoObject(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => subscriptionGroupSignupFailureDataSchema),
    ],
    customer: ['customer', nullable(lazy(() => customerSchema))],
  }
);
