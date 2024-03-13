/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, number, optional, Schema } from '../schema';

export interface CreateSubscriptionGroup {
  subscriptionId: number;
  memberIds?: number[];
  [key: string]: unknown;
}

export const createSubscriptionGroupSchema: Schema<CreateSubscriptionGroup> = expandoObject(
  {
    subscriptionId: ['subscription_id', number()],
    memberIds: ['member_ids', optional(array(number()))],
  }
);
