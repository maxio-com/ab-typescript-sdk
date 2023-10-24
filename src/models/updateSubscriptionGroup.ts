/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema } from '../schema';

export interface UpdateSubscriptionGroup {
  memberIds?: number[];
}

export const updateSubscriptionGroupSchema: Schema<UpdateSubscriptionGroup> = object(
  { memberIds: ['member_ids', optional(array(number()))] }
);
