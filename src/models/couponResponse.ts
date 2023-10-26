/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Coupon, couponSchema } from './coupon';

export interface CouponResponse {
  coupon?: Coupon;
}

export const couponResponseSchema: Schema<CouponResponse> = object({
  coupon: ['coupon', optional(lazy(() => couponSchema))],
});
