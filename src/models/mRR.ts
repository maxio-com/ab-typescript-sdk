/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema.js';
import { Breakouts, breakoutsSchema } from './breakouts.js';

export interface MRR {
  amountInCents?: bigint;
  amountFormatted?: string;
  currency?: string;
  currencySymbol?: string;
  breakouts?: Breakouts;
  /** ISO8601 timestamp */
  atTime?: string;
  [key: string]: unknown;
}

export const mRRSchema: Schema<MRR> = lazy(() =>
  expandoObject({
    amountInCents: ['amount_in_cents', optional(bigint())],
    amountFormatted: ['amount_formatted', optional(string())],
    currency: ['currency', optional(string())],
    currencySymbol: ['currency_symbol', optional(string())],
    breakouts: ['breakouts', optional(breakoutsSchema)],
    atTime: ['at_time', optional(string())],
  })
);
