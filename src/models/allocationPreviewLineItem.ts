/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, number, object, optional, Schema, string } from '../schema';

export interface AllocationPreviewLineItem {
  transactionType?: string;
  kind?: string;
  amountInCents?: bigint;
  memo?: string;
  discountAmountInCents?: bigint;
  taxableAmountInCents?: bigint;
  componentId?: number;
  componentHandle?: string;
  direction?: string;
}

export const allocationPreviewLineItemSchema: Schema<AllocationPreviewLineItem> = object(
  {
    transactionType: ['transaction_type', optional(string())],
    kind: ['kind', optional(string())],
    amountInCents: ['amount_in_cents', optional(bigint())],
    memo: ['memo', optional(string())],
    discountAmountInCents: ['discount_amount_in_cents', optional(bigint())],
    taxableAmountInCents: ['taxable_amount_in_cents', optional(bigint())],
    componentId: ['component_id', optional(number())],
    componentHandle: ['component_handle', optional(string())],
    direction: ['direction', optional(string())],
  }
);
