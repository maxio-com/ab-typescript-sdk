/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for OwnerType
 */
export enum OwnerType {
  Subscription = 'subscription',
}

/**
 * Schema for OwnerType
 */
export const ownerTypeSchema: Schema<OwnerType> = stringEnum(OwnerType);
