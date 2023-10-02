/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  CompoundingStrategyEnum,
  compoundingStrategyEnumSchema,
} from '../compoundingStrategyEnum';

/** This is a container type for one-of types. */
export type CreateOrUpdatePercentageCouponCompoundingStrategy = CompoundingStrategyEnum;

export const createOrUpdatePercentageCouponCompoundingStrategySchema: Schema<CreateOrUpdatePercentageCouponCompoundingStrategy> = oneOf(
  [compoundingStrategyEnumSchema]
);

export namespace CreateOrUpdatePercentageCouponCompoundingStrategy {
  /**
  * Validation method to narrow down union type to CompoundingStrategyEnum type case.
  *
  * This is Compounding Strategy case.
  */
  export function isCompoundingStrategyEnum(value: unknown): value is CompoundingStrategyEnum {
    const validationResult = validateAndMap(value, compoundingStrategyEnumSchema);
    return validationResult.errors === false;
  }
}
