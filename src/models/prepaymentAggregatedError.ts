/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface PrepaymentAggregatedError {
  amountInCents?: string[];
  base?: string[];
  external?: string[];
}

export const prepaymentAggregatedErrorSchema: Schema<PrepaymentAggregatedError> = object(
  {
    amountInCents: ['amount_in_cents', optional(array(string()))],
    base: ['base', optional(array(string()))],
    external: ['external', optional(array(string()))],
  }
);
