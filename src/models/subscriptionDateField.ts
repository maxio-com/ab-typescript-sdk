/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionDateField
 */
export enum SubscriptionDateField {
  CurrentPeriodEndsAt = 'current_period_ends_at',
  CurrentPeriodStartsAt = 'current_period_starts_at',
  CreatedAt = 'created_at',
  ActivatedAt = 'activated_at',
  CanceledAt = 'canceled_at',
  ExpiresAt = 'expires_at',
  TrialStartedAt = 'trial_started_at',
  TrialEndedAt = 'trial_ended_at',
  UpdatedAt = 'updated_at',
}

/**
 * Schema for SubscriptionDateField
 */
export const subscriptionDateFieldSchema: Schema<SubscriptionDateField> = stringEnum(SubscriptionDateField);
