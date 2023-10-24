/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema, string } from '../schema';
import { Breakouts, breakoutsSchema } from './breakouts';

export interface MRR {
  amountInCents?: number;
  amountFormatted?: string;
  currency?: string;
  currencySymbol?: string;
  breakouts?: Breakouts;
  /** ISO8601 timestamp */
  atTime?: string;
}

export const mRRSchema: Schema<MRR> = object({
  amountInCents: ['amount_in_cents', optional(number())],
  amountFormatted: ['amount_formatted', optional(string())],
  currency: ['currency', optional(string())],
  currencySymbol: ['currency_symbol', optional(string())],
  breakouts: ['breakouts', optional(lazy(() => breakoutsSchema))],
  atTime: ['at_time', optional(string())],
});
