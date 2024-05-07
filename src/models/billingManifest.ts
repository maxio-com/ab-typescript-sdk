/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  expandoObject,
  lazy,
  nullable,
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
  startDate?: string | null;
  endDate?: string | null;
  periodType?: string | null;
  existingBalanceInCents?: bigint;
  [key: string]: unknown;
}

export const billingManifestSchema: Schema<BillingManifest> = expandoObject({
  lineItems: [
    'line_items',
    optional(array(lazy(() => billingManifestItemSchema))),
  ],
  totalInCents: ['total_in_cents', optional(bigint())],
  totalDiscountInCents: ['total_discount_in_cents', optional(bigint())],
  totalTaxInCents: ['total_tax_in_cents', optional(bigint())],
  subtotalInCents: ['subtotal_in_cents', optional(bigint())],
  startDate: ['start_date', optional(nullable(string()))],
  endDate: ['end_date', optional(nullable(string()))],
  periodType: ['period_type', optional(nullable(string()))],
  existingBalanceInCents: ['existing_balance_in_cents', optional(bigint())],
});
