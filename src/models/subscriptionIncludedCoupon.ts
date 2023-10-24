/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface SubscriptionIncludedCoupon {
  code?: string;
  useCount?: number;
  usesAllowed?: number;
  expiresAt?: string | null;
  recurring?: boolean;
  amountInCents?: number | null;
  percentage?: string | null;
}

export const subscriptionIncludedCouponSchema: Schema<SubscriptionIncludedCoupon> = object(
  {
    code: ['code', optional(string())],
    useCount: ['use_count', optional(number())],
    usesAllowed: ['uses_allowed', optional(number())],
    expiresAt: ['expires_at', optional(nullable(string()))],
    recurring: ['recurring', optional(boolean())],
    amountInCents: ['amount_in_cents', optional(nullable(number()))],
    percentage: ['percentage', optional(nullable(string()))],
  }
);
