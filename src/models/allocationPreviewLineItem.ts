/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AllocationPreviewDirection,
  allocationPreviewDirectionSchema,
} from './allocationPreviewDirection';
import {
  AllocationPreviewLineItemKind,
  allocationPreviewLineItemKindSchema,
} from './allocationPreviewLineItemKind';
import {
  LineItemTransactionType,
  lineItemTransactionTypeSchema,
} from './lineItemTransactionType';

export interface AllocationPreviewLineItem {
  /** A handle for the line item transaction type */
  transactionType?: LineItemTransactionType;
  /** A handle for the line item kind for allocation preview */
  kind?: AllocationPreviewLineItemKind;
  amountInCents?: bigint;
  memo?: string;
  discountAmountInCents?: bigint;
  taxableAmountInCents?: bigint;
  componentId?: number;
  componentHandle?: string;
  /** Visible when using Fine-grained Component Control */
  direction?: AllocationPreviewDirection;
  [key: string]: unknown;
}

export const allocationPreviewLineItemSchema: Schema<AllocationPreviewLineItem> = expandoObject(
  {
    transactionType: [
      'transaction_type',
      optional(lineItemTransactionTypeSchema),
    ],
    kind: ['kind', optional(allocationPreviewLineItemKindSchema)],
    amountInCents: ['amount_in_cents', optional(bigint())],
    memo: ['memo', optional(string())],
    discountAmountInCents: ['discount_amount_in_cents', optional(bigint())],
    taxableAmountInCents: ['taxable_amount_in_cents', optional(bigint())],
    componentId: ['component_id', optional(number())],
    componentHandle: ['component_handle', optional(string())],
    direction: ['direction', optional(allocationPreviewDirectionSchema)],
  }
);
