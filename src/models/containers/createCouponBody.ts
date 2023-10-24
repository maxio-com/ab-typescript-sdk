/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  CreateOrUpdateCoupon,
  createOrUpdateCouponSchema,
} from '../createOrUpdateCoupon';

/** This is a container type for one-of types. */
export type CreateCouponBody = CreateOrUpdateCoupon;

export const createCouponBodySchema: Schema<CreateCouponBody> = oneOf([
  createOrUpdateCouponSchema,
]);

export namespace CreateCouponBody {
  /**
  * Validation method to narrow down union type to CreateOrUpdateCoupon type case.
  *
  * This is Create or Update Coupon case.
  */
  export function isCreateOrUpdateCoupon(value: unknown): value is CreateOrUpdateCoupon {
    const validationResult = validateAndMap(value, createOrUpdateCouponSchema);
    return validationResult.errors === false;
  }
}
