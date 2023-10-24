/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Breakouts, breakoutsSchema } from './breakouts';
import { MovementLineItem, movementLineItemSchema } from './movementLineItem';

export interface Movement {
  timestamp?: string;
  amountInCents?: number;
  amountFormatted?: string;
  description?: string;
  category?: string;
  breakouts?: Breakouts;
  lineItems?: MovementLineItem[];
  subscriptionId?: number;
  subscriberName?: string;
}

export const movementSchema: Schema<Movement> = object({
  timestamp: ['timestamp', optional(string())],
  amountInCents: ['amount_in_cents', optional(number())],
  amountFormatted: ['amount_formatted', optional(string())],
  description: ['description', optional(string())],
  category: ['category', optional(string())],
  breakouts: ['breakouts', optional(lazy(() => breakoutsSchema))],
  lineItems: [
    'line_items',
    optional(array(lazy(() => movementLineItemSchema))),
  ],
  subscriptionId: ['subscription_id', optional(number())],
  subscriberName: ['subscriber_name', optional(string())],
});
