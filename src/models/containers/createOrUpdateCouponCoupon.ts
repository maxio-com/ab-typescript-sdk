/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  CreateOrUpdateFlatAmountCoupon,
  createOrUpdateFlatAmountCouponSchema,
} from '../createOrUpdateFlatAmountCoupon';
import {
  CreateOrUpdatePercentageCoupon,
  createOrUpdatePercentageCouponSchema,
} from '../createOrUpdatePercentageCoupon';

/** This is a container type for one-of types. */
export type CreateOrUpdateCouponCoupon = CreateOrUpdatePercentageCoupon | CreateOrUpdateFlatAmountCoupon;

export const createOrUpdateCouponCouponSchema: Schema<CreateOrUpdateCouponCoupon> = oneOf(
  [createOrUpdatePercentageCouponSchema, createOrUpdateFlatAmountCouponSchema]
);

export namespace CreateOrUpdateCouponCoupon {
  /**
  * Validation method to narrow down union type to CreateOrUpdatePercentageCoupon type case.
  *
  * This is Create or Update Percentage Coupon case.
  */
  export function isCreateOrUpdatePercentageCoupon(value: unknown): value is CreateOrUpdatePercentageCoupon {
    const validationResult = validateAndMap(value, createOrUpdatePercentageCouponSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CreateOrUpdateFlatAmountCoupon type case.
  *
  * This is Create or Update Flat Amount Coupon case.
  */
  export function isCreateOrUpdateFlatAmountCoupon(value: unknown): value is CreateOrUpdateFlatAmountCoupon {
    const validationResult = validateAndMap(value, createOrUpdateFlatAmountCouponSchema);
    return validationResult.errors === false;
  }
}
