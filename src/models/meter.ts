/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema.js';

/** The metering meter this wallet is paired with, or `null` for a wallet with no meter. Set on create and immutable afterward. */
export interface Meter {
  id?: number;
  name?: string;
  handle?: string;
  /** How many wallet units one meter unit is worth, as a decimal string. Defaults to `"1.0"`. */
  conversionRate?: string;
  [key: string]: unknown;
}

export const meterSchema: Schema<Meter> = expandoObject({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  handle: ['handle', optional(string())],
  conversionRate: ['conversion_rate', optional(string())],
});
