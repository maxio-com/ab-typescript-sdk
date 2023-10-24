/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ResourceType
 */
export enum ResourceType {
  Subscriptions = 'subscriptions',
  Customers = 'customers',
}

/**
 * Schema for ResourceType
 */
export const resourceTypeSchema: Schema<ResourceType> = stringEnum(ResourceType);
