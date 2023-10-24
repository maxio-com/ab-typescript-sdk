/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

/** Object which contains subscription errors. */
export interface SubscriptionGroupSubscriptionError {
  product?: string[];
  productPricePointId?: string[];
  paymentProfile?: string[];
  paymentProfileChargifyToken?: string[];
}

export const subscriptionGroupSubscriptionErrorSchema: Schema<SubscriptionGroupSubscriptionError> = object(
  {
    product: ['product', optional(array(string()))],
    productPricePointId: ['product_price_point_id', optional(array(string()))],
    paymentProfile: ['payment_profile', optional(array(string()))],
    paymentProfileChargifyToken: [
      'payment_profile.chargify_token',
      optional(array(string())),
    ],
  }
);
