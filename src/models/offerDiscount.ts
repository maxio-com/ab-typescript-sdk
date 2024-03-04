/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface OfferDiscount {
  couponCode?: string;
  couponId?: number;
  couponName?: string;
  [key: string]: unknown;
}

export const offerDiscountSchema: Schema<OfferDiscount> = expandoObject({
  couponCode: ['coupon_code', optional(string())],
  couponId: ['coupon_id', optional(number())],
  couponName: ['coupon_name', optional(string())],
});
