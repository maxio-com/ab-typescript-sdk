/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
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
  totalInCents?: number;
  totalDiscountInCents?: number;
  totalTaxInCents?: number;
  subtotalInCents?: number;
  startDate?: string;
  endDate?: string;
  periodType?: string;
  existingBalanceInCents?: number;
}

export const billingManifestSchema: Schema<BillingManifest> = object({
  lineItems: [
    'line_items',
    optional(array(lazy(() => billingManifestItemSchema))),
  ],
  totalInCents: ['total_in_cents', optional(number())],
  totalDiscountInCents: ['total_discount_in_cents', optional(number())],
  totalTaxInCents: ['total_tax_in_cents', optional(number())],
  subtotalInCents: ['subtotal_in_cents', optional(number())],
  startDate: ['start_date', optional(string())],
  endDate: ['end_date', optional(string())],
  periodType: ['period_type', optional(string())],
  existingBalanceInCents: ['existing_balance_in_cents', optional(number())],
});
