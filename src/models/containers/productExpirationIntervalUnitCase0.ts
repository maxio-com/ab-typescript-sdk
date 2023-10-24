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
export type ProductExpirationIntervalUnitCase0 = ExtendedIntervalUnit;

export const productExpirationIntervalUnitCase0Schema: Schema<ProductExpirationIntervalUnitCase0> = oneOf(
  [extendedIntervalUnitSchema]
);

export namespace ProductExpirationIntervalUnitCase0 {
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
