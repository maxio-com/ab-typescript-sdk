/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  ExtendedIntervalUnit,
  extendedIntervalUnitSchema,
} from '../extendedIntervalUnit';

/** This is a container type for one-of types. */
export type ProductExpirationIntervalUnit = ExtendedIntervalUnit;

export const productExpirationIntervalUnitSchema: Schema<ProductExpirationIntervalUnit> = oneOf(
  [extendedIntervalUnitSchema]
);

export namespace ProductExpirationIntervalUnit {
  /**
  * Validation method to narrow down union type to ExtendedIntervalUnit type case.
  *
  * This is Extended Interval Unit case.
  */
  export function isExtendedIntervalUnit(value: unknown): value is ExtendedIntervalUnit {
    const validationResult = validateAndMap(value, extendedIntervalUnitSchema);
    return validationResult.errors === false;
  }
}
