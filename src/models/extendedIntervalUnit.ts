/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ExtendedIntervalUnit
 */
export enum ExtendedIntervalUnit {
  Day = 'day',
  Month = 'month',
  Never = 'never',
}

/**
 * Schema for ExtendedIntervalUnit
 */
export const extendedIntervalUnitSchema: Schema<ExtendedIntervalUnit> = stringEnum(ExtendedIntervalUnit);
