/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionListDateField
 */
export enum SubscriptionListDateField {
  UpdatedAt = 'updated_at',
}

/**
 * Schema for SubscriptionListDateField
 */
export const subscriptionListDateFieldSchema: Schema<SubscriptionListDateField> = stringEnum(SubscriptionListDateField);
