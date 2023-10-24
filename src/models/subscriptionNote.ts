/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface SubscriptionNote {
  id?: number;
  body?: string;
  subscriptionId?: number;
  createdAt?: string;
  updatedAt?: string;
  sticky?: boolean;
}

export const subscriptionNoteSchema: Schema<SubscriptionNote> = object({
  id: ['id', optional(number())],
  body: ['body', optional(string())],
  subscriptionId: ['subscription_id', optional(number())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  sticky: ['sticky', optional(boolean())],
});
