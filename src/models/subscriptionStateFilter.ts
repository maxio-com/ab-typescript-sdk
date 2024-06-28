/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionStateFilter
 */
export enum SubscriptionStateFilter {
  Active = 'active',
  Canceled = 'canceled',
  Expired = 'expired',
  ExpiredCards = 'expired_cards',
  OnHold = 'on_hold',
  PastDue = 'past_due',
  PendingCancellation = 'pending_cancellation',
  PendingRenewal = 'pending_renewal',
  Suspended = 'suspended',
  TrialEnded = 'trial_ended',
  Trialing = 'trialing',
  Unpaid = 'unpaid',
}

/**
 * Schema for SubscriptionStateFilter
 */
export const subscriptionStateFilterSchema: Schema<SubscriptionStateFilter> = stringEnum(
  SubscriptionStateFilter
);
