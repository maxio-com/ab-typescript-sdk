/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  CreateSubscriptionGroup,
  createSubscriptionGroupSchema,
} from './createSubscriptionGroup';

export interface CreateSubscriptionGroupRequest {
  subscriptionGroup: CreateSubscriptionGroup;
  [key: string]: unknown;
}

export const createSubscriptionGroupRequestSchema: Schema<CreateSubscriptionGroupRequest> = expandoObject(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => createSubscriptionGroupSchema),
    ],
  }
);
