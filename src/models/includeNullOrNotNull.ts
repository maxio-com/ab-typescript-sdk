/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IncludeNullOrNotNull
 */
export enum IncludeNullOrNotNull {
  NotNull = 'not_null',
  Null = 'null',
}

/**
 * Schema for IncludeNullOrNotNull
 */
export const includeNullOrNotNullSchema: Schema<IncludeNullOrNotNull> = stringEnum(
  IncludeNullOrNotNull
);
