/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CustomFieldOwner
 */
export enum CustomFieldOwner {
  Customer = 'Customer',
  Subscription = 'Subscription',
}

/**
 * Schema for CustomFieldOwner
 */
export const customFieldOwnerSchema: Schema<CustomFieldOwner> = stringEnum(CustomFieldOwner);
