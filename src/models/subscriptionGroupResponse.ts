/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  SubscriptionGroup,
  subscriptionGroupSchema,
} from './subscriptionGroup';

export interface SubscriptionGroupResponse {
  subscriptionGroup: SubscriptionGroup;
  [key: string]: unknown;
}

export const subscriptionGroupResponseSchema: Schema<SubscriptionGroupResponse> = expandoObject(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => subscriptionGroupSchema),
    ],
  }
);
