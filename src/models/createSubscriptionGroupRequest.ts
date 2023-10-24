/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CreateSubscriptionGroup,
  createSubscriptionGroupSchema,
} from './createSubscriptionGroup';

export interface CreateSubscriptionGroupRequest {
  subscriptionGroup: CreateSubscriptionGroup;
}

export const createSubscriptionGroupRequestSchema: Schema<CreateSubscriptionGroupRequest> = object(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => createSubscriptionGroupSchema),
    ],
  }
);
