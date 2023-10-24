/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionGroupPrepaymentMethod
 */
export enum SubscriptionGroupPrepaymentMethod {
  Check = 'check',
  Cash = 'cash',
  MoneyOrder = 'money_order',
  Ach = 'ach',
  PaypalAccount = 'paypal_account',
  Other = 'other',
}

/**
 * Schema for SubscriptionGroupPrepaymentMethod
 */
export const subscriptionGroupPrepaymentMethodSchema: Schema<SubscriptionGroupPrepaymentMethod> = stringEnum(SubscriptionGroupPrepaymentMethod);
