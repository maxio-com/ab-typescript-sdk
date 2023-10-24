/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of SubscriptionsAddCouponJson422
 */
interface SubscriptionsAddCouponJson422 {
  codes?: string[];
  subscription?: string[];
  coupon_codes?: string[];
}

export class SubscriptionsAddCouponJson422Error extends ApiError<SubscriptionsAddCouponJson422> {}
