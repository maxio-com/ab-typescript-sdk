/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface PaymentAllocation {
  id?: number;
  amountInCents?: number;
  success?: boolean;
  memo?: string;
}

export const paymentAllocationSchema: Schema<PaymentAllocation> = object({
  id: ['id', optional(number())],
  amountInCents: ['amount_in_cents', optional(number())],
  success: ['success', optional(boolean())],
  memo: ['memo', optional(string())],
});
