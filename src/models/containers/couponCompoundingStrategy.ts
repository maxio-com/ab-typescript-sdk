/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  CompoundingStrategy,
  compoundingStrategySchema,
} from '../compoundingStrategy';

/** This is a container type for any-of types. */
export type CouponCompoundingStrategy = CompoundingStrategy;

export const couponCompoundingStrategySchema: Schema<CouponCompoundingStrategy> = anyOf(
  [compoundingStrategySchema]
);

export namespace CouponCompoundingStrategy {
  /**
  * Validation method to narrow down union type to CompoundingStrategy type case.
  *
  * This is Compounding Strategy case.
  */
  export function isCompoundingStrategy(value: unknown): value is CompoundingStrategy {
    const validationResult = validateAndMap(value, compoundingStrategySchema);
    return validationResult.errors === false;
  }
}
