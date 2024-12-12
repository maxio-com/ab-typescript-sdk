/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface CouponCurrency {
  id?: number | null;
  currency?: string;
  price?: number | null;
  couponId?: number;
  [key: string]: unknown;
}

export const couponCurrencySchema: Schema<CouponCurrency> = expandoObject({
  id: ['id', optional(nullable(number()))],
  currency: ['currency', optional(string())],
  price: ['price', optional(nullable(number()))],
  couponId: ['coupon_id', optional(number())],
});
