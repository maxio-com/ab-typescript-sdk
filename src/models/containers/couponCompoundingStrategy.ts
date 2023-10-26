/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  CouponCompoundingStrategyCase0,
  couponCompoundingStrategyCase0Schema,
} from './couponCompoundingStrategyCase0';

/** This is a container type for any-of types. */
export type CouponCompoundingStrategy = CouponCompoundingStrategyCase0;

export const couponCompoundingStrategySchema: Schema<CouponCompoundingStrategy> = anyOf(
  [couponCompoundingStrategyCase0Schema]
);

export namespace CouponCompoundingStrategy {
  /**
  * Validation method to narrow down union type to CouponCompoundingStrategyCase0 type case.
  *
  * This is CouponCompoundingStrategyCase0 case.
  */
  export function isCouponCompoundingStrategyCase0(value: unknown): value is CouponCompoundingStrategyCase0 {
    const validationResult = validateAndMap(value, couponCompoundingStrategyCase0Schema);
    return validationResult.errors === false;
  }
}
