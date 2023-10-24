/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { SubscriptionGroup, subscriptionGroupSchema } from './subscriptionGroup';

export interface SubscriptionGroupResponse {
  subscriptionGroup: SubscriptionGroup;
}

export const subscriptionGroupResponseSchema: Schema<SubscriptionGroupResponse> = object(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => subscriptionGroupSchema),
    ],
  }
);
