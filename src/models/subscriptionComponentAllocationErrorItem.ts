/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface SubscriptionComponentAllocationErrorItem {
  kind?: string;
  message?: string;
}

export const subscriptionComponentAllocationErrorItemSchema: Schema<SubscriptionComponentAllocationErrorItem> = object(
  {
    kind: ['kind', optional(string())],
    message: ['message', optional(string())],
  }
);
