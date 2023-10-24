/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CleanupScope
 */
export enum CleanupScope {
  All = 'all',
  Customers = 'customers',
}

/**
 * Schema for CleanupScope
 */
export const cleanupScopeSchema: Schema<CleanupScope> = stringEnum(CleanupScope);
