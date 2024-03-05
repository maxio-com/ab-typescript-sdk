/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, number, optional, Schema } from '../schema';
import {
  CreateSubscriptionGroupSubscriptionId,
  createSubscriptionGroupSubscriptionIdSchema,
} from './containers/createSubscriptionGroupSubscriptionId';

export interface CreateSubscriptionGroup {
  subscriptionId: CreateSubscriptionGroupSubscriptionId;
  memberIds?: number[];
  [key: string]: unknown;
}

export const createSubscriptionGroupSchema: Schema<CreateSubscriptionGroup> = expandoObject(
  {
    subscriptionId: [
      'subscription_id',
      createSubscriptionGroupSubscriptionIdSchema,
    ],
    memberIds: ['member_ids', optional(array(number()))],
  }
);
