/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionState
 */
export enum SubscriptionState {
  Pending = 'pending',
  FailedToCreate = 'failed_to_create',
  Trialing = 'trialing',
  Assessing = 'assessing',
  Active = 'active',
  SoftFailure = 'soft_failure',
  PastDue = 'past_due',
  Suspended = 'suspended',
  Canceled = 'canceled',
  Expired = 'expired',
  Paused = 'paused',
  Unpaid = 'unpaid',
  TrialEnded = 'trial_ended',
  OnHold = 'on_hold',
  AwaitingSignup = 'awaiting_signup',
}

/**
 * Schema for SubscriptionState
 */
export const subscriptionStateSchema: Schema<SubscriptionState> = stringEnum(
  SubscriptionState
);
