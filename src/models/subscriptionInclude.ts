/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionInclude
 */
export enum SubscriptionInclude {
  Coupons = 'coupons',
  SelfServicePageToken = 'self_service_page_token',
}

/**
 * Schema for SubscriptionInclude
 */
export const subscriptionIncludeSchema: Schema<SubscriptionInclude> = stringEnum(
  SubscriptionInclude
);
