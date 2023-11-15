/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema, string } from '../schema';

export interface Breakouts {
  planAmountInCents?: bigint;
  planAmountFormatted?: string;
  usageAmountInCents?: bigint;
  usageAmountFormatted?: string;
}

export const breakoutsSchema: Schema<Breakouts> = object({
  planAmountInCents: ['plan_amount_in_cents', optional(bigint())],
  planAmountFormatted: ['plan_amount_formatted', optional(string())],
  usageAmountInCents: ['usage_amount_in_cents', optional(bigint())],
  usageAmountFormatted: ['usage_amount_formatted', optional(string())],
});
