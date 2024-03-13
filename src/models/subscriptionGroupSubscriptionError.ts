/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema';

/** Object which contains subscription errors. */
export interface SubscriptionGroupSubscriptionError {
  product?: string[];
  productPricePointId?: string[];
  paymentProfile?: string[];
  paymentProfileChargifyToken?: string[];
  base?: string[];
  paymentProfileExpirationMonth?: string[];
  paymentProfileExpirationYear?: string[];
  paymentProfileFullNumber?: string[];
  [key: string]: unknown;
}

export const subscriptionGroupSubscriptionErrorSchema: Schema<SubscriptionGroupSubscriptionError> = expandoObject(
  {
    product: ['product', optional(array(string()))],
    productPricePointId: ['product_price_point_id', optional(array(string()))],
    paymentProfile: ['payment_profile', optional(array(string()))],
    paymentProfileChargifyToken: [
      'payment_profile.chargify_token',
      optional(array(string())),
    ],
    base: ['base', optional(array(string()))],
    paymentProfileExpirationMonth: [
      'payment_profile.expiration_month',
      optional(array(string())),
    ],
    paymentProfileExpirationYear: [
      'payment_profile.expiration_year',
      optional(array(string())),
    ],
    paymentProfileFullNumber: [
      'payment_profile.full_number',
      optional(array(string())),
    ],
  }
);
