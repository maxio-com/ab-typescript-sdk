/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, oneOf, Schema, validateAndMap } from '../../schema';
import { Price, priceSchema } from '../price';

/** This is a container type for one-of types. */
export type OveragePricingPrices = Price[];

export const overagePricingPricesSchema: Schema<OveragePricingPrices> = oneOf([
  array(priceSchema),
]);

export namespace OveragePricingPrices {
  /**
  * Validation method to narrow down union type to Price[] type case.
  *
  * This is Array of Price case.
  */
  export function isArrayOfPrice(value: unknown): value is Price[] {
    if (!Array.isArray(value))
    {
      return false;
    };
    const validationResult = validateAndMap(value, array(priceSchema));
    return validationResult.errors === false;
  }
}
