/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for GroupTargetType
 */
export enum GroupTargetType {
  Customer = 'customer',
  Subscription = 'subscription',
  Self = 'self',
  Parent = 'parent',
  Eldest = 'eldest',
}

/**
 * Schema for GroupTargetType
 */
export const groupTargetTypeSchema: Schema<GroupTargetType> = stringEnum(
  GroupTargetType
);
