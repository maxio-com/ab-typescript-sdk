/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  AllocationPreviewDirection,
  allocationPreviewDirectionSchema,
} from './allocationPreviewDirection.js';
import {
  AllocationPreviewItem,
  allocationPreviewItemSchema,
} from './allocationPreviewItem.js';
import {
  AllocationPreviewLineItem,
  allocationPreviewLineItemSchema,
} from './allocationPreviewLineItem.js';

export interface AllocationPreview {
  startDate?: string;
  endDate?: string;
  subtotalInCents?: bigint;
  totalTaxInCents?: bigint;
  totalDiscountInCents?: bigint;
  totalInCents?: bigint;
  direction?: AllocationPreviewDirection;
  prorationScheme?: string;
  lineItems?: AllocationPreviewLineItem[];
  accrueCharge?: boolean;
  allocations?: AllocationPreviewItem[];
  periodType?: string;
  /** An integer representing the amount of the subscription's current balance */
  existingBalanceInCents?: bigint;
  [key: string]: unknown;
}

export const allocationPreviewSchema: Schema<AllocationPreview> = lazy(() =>
  expandoObject({
    startDate: ['start_date', optional(string())],
    endDate: ['end_date', optional(string())],
    subtotalInCents: ['subtotal_in_cents', optional(bigint())],
    totalTaxInCents: ['total_tax_in_cents', optional(bigint())],
    totalDiscountInCents: ['total_discount_in_cents', optional(bigint())],
    totalInCents: ['total_in_cents', optional(bigint())],
    direction: ['direction', optional(allocationPreviewDirectionSchema)],
    prorationScheme: ['proration_scheme', optional(string())],
    lineItems: ['line_items', optional(array(allocationPreviewLineItemSchema))],
    accrueCharge: ['accrue_charge', optional(boolean())],
    allocations: ['allocations', optional(array(allocationPreviewItemSchema))],
    periodType: ['period_type', optional(string())],
    existingBalanceInCents: ['existing_balance_in_cents', optional(bigint())],
  })
);
