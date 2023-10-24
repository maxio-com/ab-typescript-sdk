/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AllocationPreviewItem,
  allocationPreviewItemSchema,
} from './allocationPreviewItem';
import {
  AllocationPreviewLineItem,
  allocationPreviewLineItemSchema,
} from './allocationPreviewLineItem';

export interface AllocationPreview {
  startDate?: string;
  endDate?: string;
  subtotalInCents?: number;
  totalTaxInCents?: number;
  totalDiscountInCents?: number;
  totalInCents?: number;
  direction?: string;
  prorationScheme?: string;
  lineItems?: AllocationPreviewLineItem[];
  accrueCharge?: boolean;
  allocations?: AllocationPreviewItem[];
  periodType?: string;
  /** An integer representing the amount of the subscription's current balance */
  existingBalanceInCents?: number;
}

export const allocationPreviewSchema: Schema<AllocationPreview> = object({
  startDate: ['start_date', optional(string())],
  endDate: ['end_date', optional(string())],
  subtotalInCents: ['subtotal_in_cents', optional(number())],
  totalTaxInCents: ['total_tax_in_cents', optional(number())],
  totalDiscountInCents: ['total_discount_in_cents', optional(number())],
  totalInCents: ['total_in_cents', optional(number())],
  direction: ['direction', optional(string())],
  prorationScheme: ['proration_scheme', optional(string())],
  lineItems: [
    'line_items',
    optional(array(lazy(() => allocationPreviewLineItemSchema))),
  ],
  accrueCharge: ['accrue_charge', optional(boolean())],
  allocations: [
    'allocations',
    optional(array(lazy(() => allocationPreviewItemSchema))),
  ],
  periodType: ['period_type', optional(string())],
  existingBalanceInCents: ['existing_balance_in_cents', optional(number())],
});
