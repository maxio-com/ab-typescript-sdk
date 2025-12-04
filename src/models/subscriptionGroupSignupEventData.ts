/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, nullable, Schema } from '../schema.js';
import { Customer, customerSchema } from './customer.js';
import {
  SubscriptionGroupSignupFailureData,
  subscriptionGroupSignupFailureDataSchema,
} from './subscriptionGroupSignupFailureData.js';

export interface SubscriptionGroupSignupEventData {
  subscriptionGroup: SubscriptionGroupSignupFailureData;
  customer: Customer | null;
  [key: string]: unknown;
}

export const subscriptionGroupSignupEventDataSchema: Schema<SubscriptionGroupSignupEventData> = lazy(
  () =>
    expandoObject({
      subscriptionGroup: [
        'subscription_group',
        subscriptionGroupSignupFailureDataSchema,
      ],
      customer: ['customer', nullable(customerSchema)],
    })
);
