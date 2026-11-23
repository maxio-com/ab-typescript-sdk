/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for Origin
 */
export enum Origin {
  Recurring = 'recurring',
  Manual = 'manual',
  InitialBalance = 'initial_balance',
  AllowanceIncrease = 'allowance_increase',
  Purchase = 'purchase',
}

/**
 * Schema for Origin
 */
export const originSchema: Schema<Origin> = stringEnum(Origin);
