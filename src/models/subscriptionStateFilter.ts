/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for SubscriptionStateFilter
 */
export enum SubscriptionStateFilter {
  Active = 'active',
  Canceled = 'canceled',
  Expired = 'expired',
  ExpiredCards = 'expired_cards',
  EnumExpiredCardsLiveSubscriptions = 'expired_cards_(live_subscriptions)',
  EnumExpiredCardsAllSubscriptions = 'expired_cards_(all_subscriptions)',
  OnHold = 'on_hold',
  AwaitingSignup = 'awaiting_signup',
  AwaitingSignupDate = 'awaiting_signup_date',
  PastDue = 'past_due',
  PendingCancellation = 'pending_cancellation',
  PendingRenewal = 'pending_renewal',
  PrepaidDunning = 'prepaid_dunning',
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
