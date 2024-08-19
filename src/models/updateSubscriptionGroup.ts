/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, number, optional, Schema } from '../schema';

export interface UpdateSubscriptionGroup {
  memberIds?: number[];
  [key: string]: unknown;
}

export const updateSubscriptionGroupSchema: Schema<UpdateSubscriptionGroup> = expandoObject(
  { memberIds: ['member_ids', optional(array(number()))] }
);
