/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CleanupScopeEnum
 */
export enum CleanupScopeEnum {
  All = 'all',
  Customers = 'customers',
}

/**
 * Schema for CleanupScopeEnum
 */
export const cleanupScopeEnumSchema: Schema<CleanupScopeEnum> = stringEnum(CleanupScopeEnum);
