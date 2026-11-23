/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for QScope
 */
export enum QScope {
  FullName = 'full_name',
  FirstName = 'first_name',
  LastName = 'last_name',
  Organization = 'organization',
  CustomerReference = 'customer_reference',
  SubscriptionReference = 'subscription_reference',
  LastFour = 'last_four',
}

/**
 * Schema for QScope
 */
export const qScopeSchema: Schema<QScope> = stringEnum(QScope);
