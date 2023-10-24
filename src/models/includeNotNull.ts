/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IncludeNotNull
 */
export enum IncludeNotNull {
  NotNull = 'not_null',
}

/**
 * Schema for IncludeNotNull
 */
export const includeNotNullSchema: Schema<IncludeNotNull> = stringEnum(IncludeNotNull);
