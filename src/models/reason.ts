/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for Reason
 */
export enum Reason {
  EntitlementMissing = 'entitlement_missing',
  WalletArchived = 'wallet_archived',
  SubscriptionTerminated = 'subscription_terminated',
  FeatureRemoved = 'feature_removed',
  WalletBehaviorDisabled = 'wallet_behavior_disabled',
  SupersededByReplacement = 'superseded_by_replacement',
  SubscriptionPrepaid = 'subscription_prepaid',
  AllowanceNotRepresentable = 'allowance_not_representable',
  BalanceAtCapacity = 'balance_at_capacity',
}

/**
 * Schema for Reason
 */
export const reasonSchema: Schema<Reason> = stringEnum(Reason);
