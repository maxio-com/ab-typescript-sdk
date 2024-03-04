/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { Breakouts, breakoutsSchema } from './breakouts';
import { MovementLineItem, movementLineItemSchema } from './movementLineItem';

export interface Movement {
  timestamp?: string;
  amountInCents?: bigint;
  amountFormatted?: string;
  description?: string;
  category?: string;
  breakouts?: Breakouts;
  lineItems?: MovementLineItem[];
  subscriptionId?: number;
  subscriberName?: string;
  [key: string]: unknown;
}

export const movementSchema: Schema<Movement> = expandoObject({
  timestamp: ['timestamp', optional(string())],
  amountInCents: ['amount_in_cents', optional(bigint())],
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
