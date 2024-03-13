/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface SubscriptionGroupSingleError {
  subscriptionGroup: string;
  [key: string]: unknown;
}

export const subscriptionGroupSingleErrorSchema: Schema<SubscriptionGroupSingleError> = expandoObject(
  { subscriptionGroup: ['subscription_group', string()] }
);
