/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema';

export interface SubscriptionGroupUpdateError {
  members?: string[];
  [key: string]: unknown;
}

export const subscriptionGroupUpdateErrorSchema: Schema<SubscriptionGroupUpdateError> = expandoObject(
  { members: ['members', optional(array(string()))] }
);
