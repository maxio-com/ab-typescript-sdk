/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface SubscriptionComponentAllocationErrorItem {
  kind?: string;
  message?: string;
  [key: string]: unknown;
}

export const subscriptionComponentAllocationErrorItemSchema: Schema<SubscriptionComponentAllocationErrorItem> = expandoObject(
  {
    kind: ['kind', optional(string())],
    message: ['message', optional(string())],
  }
);
