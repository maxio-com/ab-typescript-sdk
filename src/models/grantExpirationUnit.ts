/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for GrantExpirationUnit
 */
export enum GrantExpirationUnit {
  Day = 'day',
  Month = 'month',
  UntilNextRefill = 'until_next_refill',
}

/**
 * Schema for GrantExpirationUnit
 */
export const grantExpirationUnitSchema: Schema<GrantExpirationUnit> = stringEnum(
  GrantExpirationUnit
);
