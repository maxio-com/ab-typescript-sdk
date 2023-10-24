/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface OverrideSubscription {
  /** Can be used to record an external signup date. Chargify uses this field to record when a subscription first goes active (either at signup or at trial end) */
  activatedAt?: string;
  /** Can be used to record an external cancellation date. Chargify sets this field automatically when a subscription is canceled, whether by request or via dunning. */
  canceledAt?: string;
  /** Can be used to record a reason for the original cancellation. */
  cancellationMessage?: string;
  /** Can be used to record an external expiration date. Chargify sets this field automatically when a subscription expires (ceases billing) after a prescribed amount of time. */
  expiresAt?: string;
  /** Can only be used when a subscription is unbilled, which happens when a future initial billing date is passed at subscription creation. The value passed must be before the current date and time. Allows you to set when the period started so mid period component allocations have the correct proration. */
  currentPeriodStartsAt?: string;
}

export const overrideSubscriptionSchema: Schema<OverrideSubscription> = object({
  activatedAt: ['activated_at', optional(string())],
  canceledAt: ['canceled_at', optional(string())],
  cancellationMessage: ['cancellation_message', optional(string())],
  expiresAt: ['expires_at', optional(string())],
  currentPeriodStartsAt: ['current_period_starts_at', optional(string())],
});
