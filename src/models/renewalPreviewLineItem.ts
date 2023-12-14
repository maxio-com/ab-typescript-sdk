/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, number, object, optional, Schema, string } from '../schema';

export interface RenewalPreviewLineItem {
  transactionType?: string;
  kind?: string;
  amountInCents?: bigint;
  memo?: string;
  discountAmountInCents?: bigint;
  taxableAmountInCents?: bigint;
  productId?: number;
  productName?: string;
  componentId?: number;
  componentHandle?: string;
  componentName?: string;
  productHandle?: string;
  periodRangeStart?: string;
  periodRangeEnd?: string;
}

export const renewalPreviewLineItemSchema: Schema<RenewalPreviewLineItem> = object(
  {
    transactionType: ['transaction_type', optional(string())],
    kind: ['kind', optional(string())],
    amountInCents: ['amount_in_cents', optional(bigint())],
    memo: ['memo', optional(string())],
    discountAmountInCents: ['discount_amount_in_cents', optional(bigint())],
    taxableAmountInCents: ['taxable_amount_in_cents', optional(bigint())],
    productId: ['product_id', optional(number())],
    productName: ['product_name', optional(string())],
    componentId: ['component_id', optional(number())],
    componentHandle: ['component_handle', optional(string())],
    componentName: ['component_name', optional(string())],
    productHandle: ['product_handle', optional(string())],
    periodRangeStart: ['period_range_start', optional(string())],
    periodRangeEnd: ['period_range_end', optional(string())],
  }
);
