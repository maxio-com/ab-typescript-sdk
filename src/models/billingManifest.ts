/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  BillingManifestItem,
  billingManifestItemSchema,
} from './billingManifestItem';

export interface BillingManifest {
  lineItems?: BillingManifestItem[];
  totalInCents?: bigint;
  totalDiscountInCents?: bigint;
  totalTaxInCents?: bigint;
  subtotalInCents?: bigint;
  startDate?: string;
  endDate?: string;
  periodType?: string;
  existingBalanceInCents?: bigint;
}

export const billingManifestSchema: Schema<BillingManifest> = object({
  lineItems: [
    'line_items',
    optional(array(lazy(() => billingManifestItemSchema))),
  ],
  totalInCents: ['total_in_cents', optional(bigint())],
  totalDiscountInCents: ['total_discount_in_cents', optional(bigint())],
  totalTaxInCents: ['total_tax_in_cents', optional(bigint())],
  subtotalInCents: ['subtotal_in_cents', optional(bigint())],
  startDate: ['start_date', optional(string())],
  endDate: ['end_date', optional(string())],
  periodType: ['period_type', optional(string())],
  existingBalanceInCents: ['existing_balance_in_cents', optional(bigint())],
});
