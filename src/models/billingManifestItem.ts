/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface BillingManifestItem {
  transactionType?: string;
  kind?: string;
  amountInCents?: number;
  memo?: string;
  discountAmountInCents?: number;
  taxableAmountInCents?: number;
  componentId?: number;
  componentHandle?: string;
  componentName?: string;
  productId?: number;
  productHandle?: string;
  productName?: string;
  periodRangeStart?: string;
  periodRangeEnd?: string;
}

export const billingManifestItemSchema: Schema<BillingManifestItem> = object({
  transactionType: ['transaction_type', optional(string())],
  kind: ['kind', optional(string())],
  amountInCents: ['amount_in_cents', optional(number())],
  memo: ['memo', optional(string())],
  discountAmountInCents: ['discount_amount_in_cents', optional(number())],
  taxableAmountInCents: ['taxable_amount_in_cents', optional(number())],
  componentId: ['component_id', optional(number())],
  componentHandle: ['component_handle', optional(string())],
  componentName: ['component_name', optional(string())],
  productId: ['product_id', optional(number())],
  productHandle: ['product_handle', optional(string())],
  productName: ['product_name', optional(string())],
  periodRangeStart: ['period_range_start', optional(string())],
  periodRangeEnd: ['period_range_end', optional(string())],
});
