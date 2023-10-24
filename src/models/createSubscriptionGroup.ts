/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import {
  CreateSubscriptionGroupSubscriptionId,
  createSubscriptionGroupSubscriptionIdSchema,
} from './containers/createSubscriptionGroupSubscriptionId';

export interface CreateSubscriptionGroup {
  subscriptionId: CreateSubscriptionGroupSubscriptionId;
  memberIds?: number[];
}

export const createSubscriptionGroupSchema: Schema<CreateSubscriptionGroup> = object(
  {
    subscriptionId: [
      'subscription_id',
      lazy(() => createSubscriptionGroupSubscriptionIdSchema),
    ],
    memberIds: ['member_ids', optional(array(number()))],
  }
);
