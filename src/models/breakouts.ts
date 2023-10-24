/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface Breakouts {
  planAmountInCents?: number;
  planAmountFormatted?: string;
  usageAmountInCents?: number;
  usageAmountFormatted?: string;
}

export const breakoutsSchema: Schema<Breakouts> = object({
  planAmountInCents: ['plan_amount_in_cents', optional(number())],
  planAmountFormatted: ['plan_amount_formatted', optional(string())],
  usageAmountInCents: ['usage_amount_in_cents', optional(number())],
  usageAmountFormatted: ['usage_amount_formatted', optional(string())],
});
