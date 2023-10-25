/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, dict, object, optional, Schema } from '../schema';
import {
  CreateOrUpdateCouponCoupon,
  createOrUpdateCouponCouponSchema,
} from './containers/createOrUpdateCouponCoupon';

export interface CreateOrUpdateCoupon {
  coupon?: CreateOrUpdateCouponCoupon;
  /** An object where the keys are product_ids and the values are booleans indicating if the coupon should be applicable to the product */
  restrictedProducts?: Record<string, boolean>;
  /** An object where the keys are component_ids and the values are booleans indicating if the coupon should be applicable to the component */
  restrictedComponents?: Record<string, boolean>;
}

export const createOrUpdateCouponSchema: Schema<CreateOrUpdateCoupon> = object({
  coupon: ['coupon', optional(createOrUpdateCouponCouponSchema)],
  restrictedProducts: ['restricted_products', optional(dict(boolean()))],
  restrictedComponents: ['restricted_components', optional(dict(boolean()))],
});
