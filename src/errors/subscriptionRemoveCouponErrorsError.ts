/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of SubscriptionRemoveCouponErrors
 */
interface SubscriptionRemoveCouponErrors {
  subscription: string[];
}

export class SubscriptionRemoveCouponErrorsError extends ApiError<SubscriptionRemoveCouponErrors> {}
