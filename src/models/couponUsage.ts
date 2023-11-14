/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface CouponUsage {
  /** The Chargify id of the product */
  id?: number;
  /** Name of the product */
  name?: string;
  /** Number of times the coupon has been applied */
  signups?: number;
  /** Dollar amount of customer savings as a result of the coupon. */
  savings?: number | null;
  /** Dollar amount of customer savings as a result of the coupon. */
  savingsInCents?: bigint | null;
  /** Total revenue of the all subscriptions that have received a discount from this coupon. */
  revenue?: number | null;
  /** Total revenue of the all subscriptions that have received a discount from this coupon. */
  revenueInCents?: bigint;
}

export const couponUsageSchema: Schema<CouponUsage> = object({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  signups: ['signups', optional(number())],
  savings: ['savings', optional(nullable(number()))],
  savingsInCents: ['savings_in_cents', optional(nullable(bigint()))],
  revenue: ['revenue', optional(nullable(number()))],
  revenueInCents: ['revenue_in_cents', optional(bigint())],
});
