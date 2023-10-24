/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  CouponCouponResponseCompoundingStrategyCase0,
  couponCouponResponseCompoundingStrategyCase0Schema,
} from './couponCouponResponseCompoundingStrategyCase0';

/** This is a container type for any-of types. */
export type CouponCouponResponseCompoundingStrategy = CouponCouponResponseCompoundingStrategyCase0;

export const couponCouponResponseCompoundingStrategySchema: Schema<CouponCouponResponseCompoundingStrategy> = anyOf(
  [couponCouponResponseCompoundingStrategyCase0Schema]
);

export namespace CouponCouponResponseCompoundingStrategy {
  /**
  * Validation method to narrow down union type to CouponCouponResponseCompoundingStrategyCase0 type case.
  *
  * This is CouponCouponResponseCompoundingStrategyCase0 case.
  */
  export function isCouponCouponResponseCompoundingStrategyCase0(value: unknown): value is CouponCouponResponseCompoundingStrategyCase0 {
    const validationResult = validateAndMap(value, couponCouponResponseCompoundingStrategyCase0Schema);
    return validationResult.errors === false;
  }
}
