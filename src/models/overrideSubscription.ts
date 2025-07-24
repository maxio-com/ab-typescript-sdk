/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface OverrideSubscription {
  /** Can be used to record an external signup date. Chargify uses this field to record when a subscription first goes active (either at signup or at trial end). Only ISO8601 format is supported. */
  activatedAt?: string;
  /** Can be used to record an external cancellation date. Chargify sets this field automatically when a subscription is canceled, whether by request or via dunning. Only ISO8601 format is supported. */
  canceledAt?: string;
  /** Can be used to record a reason for the original cancellation. */
  cancellationMessage?: string;
  /** Can be used to record an external expiration date. Chargify sets this field automatically when a subscription expires (ceases billing) after a prescribed amount of time. Only ISO8601 format is supported. This field is not supported when Multi-frequency is enabled for the Site. To change the Term End of a Subscription, use the Update Subscription endpoint. */
  expiresAt?: string;
  /** Can only be used when a subscription is unbilled, which happens when a future initial billing date is passed at subscription creation. The value passed must be before the current date and time. Allows you to set when the period started so mid period component allocations have the correct proration. Only ISO8601 format is supported. */
  currentPeriodStartsAt?: string;
  [key: string]: unknown;
}

export const overrideSubscriptionSchema: Schema<OverrideSubscription> = expandoObject(
  {
    activatedAt: ['activated_at', optional(string())],
    canceledAt: ['canceled_at', optional(string())],
    cancellationMessage: ['cancellation_message', optional(string())],
    expiresAt: ['expires_at', optional(string())],
    currentPeriodStartsAt: ['current_period_starts_at', optional(string())],
  }
);
