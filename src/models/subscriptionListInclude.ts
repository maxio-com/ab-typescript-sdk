/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SubscriptionListInclude
 */
export enum SubscriptionListInclude {
  SelfServicePageToken = 'self_service_page_token',
}

/**
 * Schema for SubscriptionListInclude
 */
export const subscriptionListIncludeSchema: Schema<SubscriptionListInclude> = stringEnum(SubscriptionListInclude);
