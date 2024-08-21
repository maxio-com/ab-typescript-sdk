/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IntervalUnit
 */
export enum IntervalUnit {
  Day = 'day',
  Month = 'month',
}

/**
 * Schema for IntervalUnit
 */
export const intervalUnitSchema: Schema<IntervalUnit> = stringEnum(
  IntervalUnit
);
