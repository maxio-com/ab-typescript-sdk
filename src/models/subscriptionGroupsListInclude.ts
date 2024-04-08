/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionGroupsListInclude
 */
export enum SubscriptionGroupsListInclude {
  AccountBalances = 'account_balances',
}

/**
 * Schema for SubscriptionGroupsListInclude
 */
export const  subscriptionGroupsListIncludeSchema: Schema<SubscriptionGroupsListInclude> = stringEnum(SubscriptionGroupsListInclude);
