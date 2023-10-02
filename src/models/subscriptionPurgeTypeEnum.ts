/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionPurgeTypeEnum
 */
export enum SubscriptionPurgeTypeEnum {
  Customer = 'customer',
  PaymentProfile = 'payment_profile',
}

/**
 * Schema for SubscriptionPurgeTypeEnum
 */
export const subscriptionPurgeTypeEnumSchema: Schema<SubscriptionPurgeTypeEnum> = stringEnum(SubscriptionPurgeTypeEnum);
