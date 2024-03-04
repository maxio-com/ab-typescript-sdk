/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface MRRMovement {
  amount?: number;
  category?: string;
  subscriberDelta?: number;
  leadDelta?: number;
  [key: string]: unknown;
}

export const mRRMovementSchema: Schema<MRRMovement> = expandoObject({
  amount: ['amount', optional(number())],
  category: ['category', optional(string())],
  subscriberDelta: ['subscriber_delta', optional(number())],
  leadDelta: ['lead_delta', optional(number())],
});
