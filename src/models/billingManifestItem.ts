/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, number, object, optional, Schema, string } from '../schema';
import {
  BillingManifestLineItemKind,
  billingManifestLineItemKindSchema,
} from './billingManifestLineItemKind';
import {
  LineItemTransactionType,
  lineItemTransactionTypeSchema,
} from './lineItemTransactionType';

export interface BillingManifestItem {
  /** A handle for the line item transaction type */
  transactionType?: LineItemTransactionType;
  /** A handle for the billing manifest line item kind */
  kind?: BillingManifestLineItemKind;
  amountInCents?: bigint;
  memo?: string;
  discountAmountInCents?: bigint;
  taxableAmountInCents?: bigint;
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
  transactionType: [
    'transaction_type',
    optional(lineItemTransactionTypeSchema),
  ],
  kind: ['kind', optional(billingManifestLineItemKindSchema)],
  amountInCents: ['amount_in_cents', optional(bigint())],
  memo: ['memo', optional(string())],
  discountAmountInCents: ['discount_amount_in_cents', optional(bigint())],
  taxableAmountInCents: ['taxable_amount_in_cents', optional(bigint())],
  componentId: ['component_id', optional(number())],
  componentHandle: ['component_handle', optional(string())],
  componentName: ['component_name', optional(string())],
  productId: ['product_id', optional(number())],
  productHandle: ['product_handle', optional(string())],
  productName: ['product_name', optional(string())],
  periodRangeStart: ['period_range_start', optional(string())],
  periodRangeEnd: ['period_range_end', optional(string())],
});
