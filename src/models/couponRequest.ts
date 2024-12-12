/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  dict,
  expandoObject,
  lazy,
  optional,
  Schema,
} from '../schema';
import { CouponPayload, couponPayloadSchema } from './couponPayload';

export interface CouponRequest {
  coupon?: CouponPayload;
  /** An object where the keys are product_ids and the values are booleans indicating if the coupon should be applicable to the product */
  restrictedProducts?: Record<string, boolean>;
  /** An object where the keys are component_ids and the values are booleans indicating if the coupon should be applicable to the component */
  restrictedComponents?: Record<string, boolean>;
  [key: string]: unknown;
}

export const couponRequestSchema: Schema<CouponRequest> = expandoObject({
  coupon: ['coupon', optional(lazy(() => couponPayloadSchema))],
  restrictedProducts: ['restricted_products', optional(dict(boolean()))],
  restrictedComponents: ['restricted_components', optional(dict(boolean()))],
});
