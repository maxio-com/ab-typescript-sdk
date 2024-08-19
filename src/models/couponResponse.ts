/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Coupon, couponSchema } from './coupon';

export interface CouponResponse {
  coupon?: Coupon;
  [key: string]: unknown;
}

export const couponResponseSchema: Schema<CouponResponse> = expandoObject({
  coupon: ['coupon', optional(lazy(() => couponSchema))],
});
