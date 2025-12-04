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
} from '../schema.js';
import { CouponPayload, couponPayloadSchema } from './couponPayload.js';

export interface CouponRequest {
  coupon?: CouponPayload;
  /** An object where the keys are product IDs or handles (prefixed with 'handle:'), and the values are booleans indicating if the coupon should be applicable to the product */
  restrictedProducts?: Record<string, boolean>;
  /** An object where the keys are component IDs or handles (prefixed with 'handle:'), and the values are booleans indicating if the coupon should be applicable to the component */
  restrictedComponents?: Record<string, boolean>;
  [key: string]: unknown;
}

export const couponRequestSchema: Schema<CouponRequest> = lazy(() =>
  expandoObject({
    coupon: ['coupon', optional(couponPayloadSchema)],
    restrictedProducts: ['restricted_products', optional(dict(boolean()))],
    restrictedComponents: ['restricted_components', optional(dict(boolean()))],
  })
);
