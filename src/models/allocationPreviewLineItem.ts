/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface AllocationPreviewLineItem {
  transactionType?: string;
  kind?: string;
  amountInCents?: number;
  memo?: string;
  discountAmountInCents?: number;
  taxableAmountInCents?: number;
  componentId?: number;
  componentHandle?: string;
  direction?: string;
}

export const allocationPreviewLineItemSchema: Schema<AllocationPreviewLineItem> = object(
  {
    transactionType: ['transaction_type', optional(string())],
    kind: ['kind', optional(string())],
    amountInCents: ['amount_in_cents', optional(number())],
    memo: ['memo', optional(string())],
    discountAmountInCents: ['discount_amount_in_cents', optional(number())],
    taxableAmountInCents: ['taxable_amount_in_cents', optional(number())],
    componentId: ['component_id', optional(number())],
    componentHandle: ['component_handle', optional(string())],
    direction: ['direction', optional(string())],
  }
);
