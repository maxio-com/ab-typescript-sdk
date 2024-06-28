/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of SubscriptionAddCoupon
 */
interface SubscriptionAddCoupon {
  codes?: string[];
  coupon_code?: string[];
  coupon_codes?: string[];
  subscription?: string[];
  [key: string]: unknown;
}

export class SubscriptionAddCouponError extends ApiError<
  SubscriptionAddCoupon
> {}
