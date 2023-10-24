/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionPurgeType
 */
export enum SubscriptionPurgeType {
  Customer = 'customer',
  PaymentProfile = 'payment_profile',
}

/**
 * Schema for SubscriptionPurgeType
 */
export const subscriptionPurgeTypeSchema: Schema<SubscriptionPurgeType> = stringEnum(SubscriptionPurgeType);
