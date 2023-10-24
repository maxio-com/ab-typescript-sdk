/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  ProductExpirationIntervalUnitCase0,
  productExpirationIntervalUnitCase0Schema,
} from './productExpirationIntervalUnitCase0';

/** This is a container type for one-of types. */
export type ProductExpirationIntervalUnit = ProductExpirationIntervalUnitCase0;

export const productExpirationIntervalUnitSchema: Schema<ProductExpirationIntervalUnit> = oneOf(
  [productExpirationIntervalUnitCase0Schema]
);

export namespace ProductExpirationIntervalUnit {
  /**
  * Validation method to narrow down union type to ProductExpirationIntervalUnitCase0 type case.
  *
  * This is ProductExpirationIntervalUnitCase0 case.
  */
  export function isProductExpirationIntervalUnitCase0(value: unknown): value is ProductExpirationIntervalUnitCase0 {
    const validationResult = validateAndMap(value, productExpirationIntervalUnitCase0Schema);
    return validationResult.errors === false;
  }
}
