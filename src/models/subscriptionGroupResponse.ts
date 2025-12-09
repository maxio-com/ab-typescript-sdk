/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  SubscriptionGroup,
  subscriptionGroupSchema,
} from './subscriptionGroup.js';

export interface SubscriptionGroupResponse {
  subscriptionGroup: SubscriptionGroup;
  [key: string]: unknown;
}

export const subscriptionGroupResponseSchema: Schema<SubscriptionGroupResponse> = lazy(
  () =>
    expandoObject({
      subscriptionGroup: ['subscription_group', subscriptionGroupSchema],
    })
);
