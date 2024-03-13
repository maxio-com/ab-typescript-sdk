/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema';

export interface SubscriptionGroupMembersArrayError {
  members: string[];
  [key: string]: unknown;
}

export const subscriptionGroupMembersArrayErrorSchema: Schema<SubscriptionGroupMembersArrayError> = expandoObject(
  { members: ['members', array(string())] }
);
