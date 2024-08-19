/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionSort
 */
export enum SubscriptionSort {
  SignupDate = 'signup_date',
  PeriodStart = 'period_start',
  PeriodEnd = 'period_end',
  NextAssessment = 'next_assessment',
  UpdatedAt = 'updated_at',
  CreatedAt = 'created_at',
}

/**
 * Schema for SubscriptionSort
 */
export const subscriptionSortSchema: Schema<SubscriptionSort> = stringEnum(
  SubscriptionSort
);
