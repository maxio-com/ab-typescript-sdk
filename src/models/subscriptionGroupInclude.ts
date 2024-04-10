/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionGroupInclude
 */
export enum SubscriptionGroupInclude {
  CurrentBillingAmountInCents = 'current_billing_amount_in_cents',
}

/**
 * Schema for SubscriptionGroupInclude
 */
export const  subscriptionGroupIncludeSchema: Schema<SubscriptionGroupInclude> = stringEnum(SubscriptionGroupInclude);
