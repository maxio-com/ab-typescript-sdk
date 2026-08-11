/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for SubscriptionListInclude
 */
export enum SubscriptionListInclude {
  SelfServicePageToken = 'self_service_page_token',
  CurrentAccountBalanceInCents = 'current_account_balance_in_cents',
  CurrentBillingAmount = 'current_billing_amount',
  ThreeDsActionLink = 'three_ds_action_link',
  Coupons = 'coupons',
}

/**
 * Schema for SubscriptionListInclude
 */
export const subscriptionListIncludeSchema: Schema<SubscriptionListInclude> = stringEnum(
  SubscriptionListInclude
);
