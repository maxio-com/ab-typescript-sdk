/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface CouponCurrency {
  id?: number;
  currency?: string;
  price?: number;
  couponId?: number;
}

export const couponCurrencySchema: Schema<CouponCurrency> = object({
  id: ['id', optional(number())],
  currency: ['currency', optional(string())],
  price: ['price', optional(number())],
  couponId: ['coupon_id', optional(number())],
});
