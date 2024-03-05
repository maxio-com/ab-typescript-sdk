/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  expandoObject,
  number,
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
  [key: string]: unknown;
}

export const paymentForAllocationSchema: Schema<PaymentForAllocation> = expandoObject(
  {
    id: ['id', optional(number())],
    amountInCents: ['amount_in_cents', optional(bigint())],
    success: ['success', optional(boolean())],
    memo: ['memo', optional(string())],
  }
);
