/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/** Information for captured payment, if applicable */
export interface PaymentForAllocation {
  id?: number;
  amountInCents?: bigint;
  success?: boolean;
  memo?: string;
}

export const paymentForAllocationSchema: Schema<PaymentForAllocation> = object({
  id: ['id', optional(number())],
  amountInCents: ['amount_in_cents', optional(bigint())],
  success: ['success', optional(boolean())],
  memo: ['memo', optional(string())],
});
