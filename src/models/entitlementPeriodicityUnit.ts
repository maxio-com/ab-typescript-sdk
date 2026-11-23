/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for EntitlementPeriodicityUnit
 */
export enum EntitlementPeriodicityUnit {
  Hour = 'hour',
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

/**
 * Schema for EntitlementPeriodicityUnit
 */
export const entitlementPeriodicityUnitSchema: Schema<EntitlementPeriodicityUnit> = stringEnum(
  EntitlementPeriodicityUnit
);
