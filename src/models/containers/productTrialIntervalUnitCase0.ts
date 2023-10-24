/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import { IntervalUnit, intervalUnitSchema } from '../intervalUnit';

/** This is a container type for one-of types. */
export type ProductTrialIntervalUnitCase0 = IntervalUnit;

export const productTrialIntervalUnitCase0Schema: Schema<ProductTrialIntervalUnitCase0> = oneOf(
  [intervalUnitSchema]
);

export namespace ProductTrialIntervalUnitCase0 {
  /**
  * Validation method to narrow down union type to IntervalUnit type case.
  *
  * This is Interval Unit case.
  */
  export function isIntervalUnit(value: unknown): value is IntervalUnit {
    const validationResult = validateAndMap(value, intervalUnitSchema);
    return validationResult.errors === false;
  }
}
