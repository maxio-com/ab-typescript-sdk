/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema';

export interface PrepaymentAggregatedError {
  amountInCents?: string[];
  base?: string[];
  external?: string[];
  [key: string]: unknown;
}

export const prepaymentAggregatedErrorSchema: Schema<PrepaymentAggregatedError> = expandoObject(
  {
    amountInCents: ['amount_in_cents', optional(array(string()))],
    base: ['base', optional(array(string()))],
    external: ['external', optional(array(string()))],
  }
);
