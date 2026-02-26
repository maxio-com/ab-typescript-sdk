/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema.js';

export interface Register {
  id?: number;
  maxioId?: string;
  name?: string;
  /** The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. */
  currencyCode?: string;
  [key: string]: unknown;
}

export const registerSchema: Schema<Register> = expandoObject({
  id: ['id', optional(number())],
  maxioId: ['maxio_id', optional(string())],
  name: ['name', optional(string())],
  currencyCode: ['currency_code', optional(string())],
});
