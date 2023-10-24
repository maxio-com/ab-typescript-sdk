/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface SubscriptionGroupMemberError {
  id?: number;
  type?: string;
  message?: string;
}

export const subscriptionGroupMemberErrorSchema: Schema<SubscriptionGroupMemberError> = object(
  {
    id: ['id', optional(number())],
    type: ['type', optional(string())],
    message: ['message', optional(string())],
  }
);
