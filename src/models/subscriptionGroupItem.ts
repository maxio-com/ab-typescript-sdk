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

export interface SubscriptionGroupItem {
  id?: number;
  reference?: string | null;
  productId?: number;
  productHandle?: string | null;
  productPricePointId?: number;
  productPricePointHandle?: string;
  currency?: string;
  couponCode?: string | null;
  totalRevenueInCents?: bigint;
  balanceInCents?: bigint;
}

export const subscriptionGroupItemSchema: Schema<SubscriptionGroupItem> = object(
  {
    id: ['id', optional(number())],
    reference: ['reference', optional(nullable(string()))],
    productId: ['product_id', optional(number())],
    productHandle: ['product_handle', optional(nullable(string()))],
    productPricePointId: ['product_price_point_id', optional(number())],
    productPricePointHandle: ['product_price_point_handle', optional(string())],
    currency: ['currency', optional(string())],
    couponCode: ['coupon_code', optional(nullable(string()))],
    totalRevenueInCents: ['total_revenue_in_cents', optional(bigint())],
    balanceInCents: ['balance_in_cents', optional(bigint())],
  }
);
