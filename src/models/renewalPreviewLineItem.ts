/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface RenewalPreviewLineItem {
  transactionType?: string;
  kind?: string;
  amountInCents?: number;
  memo?: string;
  discountAmountInCents?: number;
  taxableAmountInCents?: number;
  productId?: number;
  productName?: string;
  componentId?: number;
  componentHandle?: string;
  componentName?: string;
  productHandle?: string;
}

export const renewalPreviewLineItemSchema: Schema<RenewalPreviewLineItem> = object(
  {
    transactionType: ['transaction_type', optional(string())],
    kind: ['kind', optional(string())],
    amountInCents: ['amount_in_cents', optional(number())],
    memo: ['memo', optional(string())],
    discountAmountInCents: ['discount_amount_in_cents', optional(number())],
    taxableAmountInCents: ['taxable_amount_in_cents', optional(number())],
    productId: ['product_id', optional(number())],
    productName: ['product_name', optional(string())],
    componentId: ['component_id', optional(number())],
    componentHandle: ['component_handle', optional(string())],
    componentName: ['component_name', optional(string())],
    productHandle: ['product_handle', optional(string())],
  }
);
