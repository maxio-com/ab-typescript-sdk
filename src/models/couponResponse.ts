/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  CouponCouponResponse,
  couponCouponResponseSchema,
} from './couponCouponResponse';

export interface CouponResponse {
  coupon?: CouponCouponResponse;
}

export const couponResponseSchema: Schema<CouponResponse> = object({
  coupon: ['coupon', optional(lazy(() => couponCouponResponseSchema))],
});
