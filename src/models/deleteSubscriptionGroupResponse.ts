/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema, string } from '../schema';

export interface DeleteSubscriptionGroupResponse {
  uid?: string;
  deleted?: boolean;
  [key: string]: unknown;
}

export const deleteSubscriptionGroupResponseSchema: Schema<DeleteSubscriptionGroupResponse> = expandoObject(
  {
    uid: ['uid', optional(string())],
    deleted: ['deleted', optional(boolean())],
  }
);
