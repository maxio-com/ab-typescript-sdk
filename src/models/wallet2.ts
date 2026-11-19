/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';

export interface Wallet2 {
  /** A merchant-facing label for the wallet. Surrounding spaces are stripped; a blank or `null` value clears it. */
  name?: string | null;
  [key: string]: unknown;
}

export const wallet2Schema: Schema<Wallet2> = expandoObject({
  name: ['name', optional(nullable(string()))],
});
