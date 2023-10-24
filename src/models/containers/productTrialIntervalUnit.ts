/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  ProductTrialIntervalUnitCase0,
  productTrialIntervalUnitCase0Schema,
} from './productTrialIntervalUnitCase0';

/** This is a container type for one-of types. */
export type ProductTrialIntervalUnit = ProductTrialIntervalUnitCase0;

export const productTrialIntervalUnitSchema: Schema<ProductTrialIntervalUnit> = oneOf(
  [productTrialIntervalUnitCase0Schema]
);

export namespace ProductTrialIntervalUnit {
  /**
  * Validation method to narrow down union type to ProductTrialIntervalUnitCase0 type case.
  *
  * This is ProductTrialIntervalUnitCase0 case.
  */
  export function isProductTrialIntervalUnitCase0(value: unknown): value is ProductTrialIntervalUnitCase0 {
    const validationResult = validateAndMap(value, productTrialIntervalUnitCase0Schema);
    return validationResult.errors === false;
  }
}
