/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for Kind
 */
export enum Kind {
  AccessRight = 'access_right',
  UsageLimit = 'usage_limit',
  ServiceRight = 'service_right',
  All = 'all',
}

/**
 * Schema for Kind
 */
export const kindSchema: Schema<Kind> = stringEnum(Kind);
