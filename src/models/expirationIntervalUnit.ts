/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ExpirationIntervalUnit
 */
export enum ExpirationIntervalUnit {
  Day = 'day',
  Month = 'month',
  Never = 'never',
}

/**
 * Schema for ExpirationIntervalUnit
 */
export const expirationIntervalUnitSchema: Schema<ExpirationIntervalUnit> = stringEnum(
  ExpirationIntervalUnit
);
