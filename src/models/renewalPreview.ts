/**
 * Maxio Advanced BillingLib
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
} from '../schema';
import {
  RenewalPreviewLineItem,
  renewalPreviewLineItemSchema,
} from './renewalPreviewLineItem';

export interface RenewalPreview {
  /** The timestamp for the subscription’s next renewal */
  nextAssessmentAt?: string;
  /** An integer representing the amount of the total pre-tax, pre-discount charges that will be assessed at the next renewal */
  subtotalInCents?: bigint;
  /** An integer representing the total tax charges that will be assessed at the next renewal */
  totalTaxInCents?: bigint;
  /** An integer representing the amount of the coupon discounts that will be applied to the next renewal */
  totalDiscountInCents?: bigint;
  /** An integer representing the total amount owed, less any discounts, that will be assessed at the next renewal */
  totalInCents?: bigint;
  /** An integer representing the amount of the subscription’s current balance */
  existingBalanceInCents?: bigint;
  /** An integer representing the existing_balance_in_cents plus the total_in_cents */
  totalAmountDueInCents?: bigint;
  /** A boolean indicating whether or not additional taxes will be calculated at the time of renewal. This will be true if you are using Avalara and the address of the subscription is in one of your defined taxable regions. */
  uncalculatedTaxes?: boolean;
  /** An array of objects representing the individual transactions that will be created at the next renewal */
  lineItems?: RenewalPreviewLineItem[];
  [key: string]: unknown;
}

export const renewalPreviewSchema: Schema<RenewalPreview> = expandoObject({
  nextAssessmentAt: ['next_assessment_at', optional(string())],
  subtotalInCents: ['subtotal_in_cents', optional(bigint())],
  totalTaxInCents: ['total_tax_in_cents', optional(bigint())],
  totalDiscountInCents: ['total_discount_in_cents', optional(bigint())],
  totalInCents: ['total_in_cents', optional(bigint())],
  existingBalanceInCents: ['existing_balance_in_cents', optional(bigint())],
  totalAmountDueInCents: ['total_amount_due_in_cents', optional(bigint())],
  uncalculatedTaxes: ['uncalculated_taxes', optional(boolean())],
  lineItems: [
    'line_items',
    optional(array(lazy(() => renewalPreviewLineItemSchema))),
  ],
});
