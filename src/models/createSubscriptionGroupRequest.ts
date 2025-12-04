/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  CreateSubscriptionGroup,
  createSubscriptionGroupSchema,
} from './createSubscriptionGroup.js';

export interface CreateSubscriptionGroupRequest {
  subscriptionGroup: CreateSubscriptionGroup;
  [key: string]: unknown;
}

export const createSubscriptionGroupRequestSchema: Schema<CreateSubscriptionGroupRequest> = lazy(
  () =>
    expandoObject({
      subscriptionGroup: ['subscription_group', createSubscriptionGroupSchema],
    })
);
