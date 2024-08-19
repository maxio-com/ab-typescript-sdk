/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface SubscriptionGroupMemberError {
  id?: number;
  type?: string;
  message?: string;
  [key: string]: unknown;
}

export const subscriptionGroupMemberErrorSchema: Schema<SubscriptionGroupMemberError> = expandoObject(
  {
    id: ['id', optional(number())],
    type: ['type', optional(string())],
    message: ['message', optional(string())],
  }
);
