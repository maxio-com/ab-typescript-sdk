/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface DeleteSubscriptionGroupResponse {
  uid?: string;
  deleted?: boolean;
}

export const deleteSubscriptionGroupResponseSchema: Schema<DeleteSubscriptionGroupResponse> = object(
  {
    uid: ['uid', optional(string())],
    deleted: ['deleted', optional(boolean())],
  }
);
