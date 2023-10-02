/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  PricingSchemeEnum,
  pricingSchemeEnumSchema,
} from '../pricingSchemeEnum';

/** This is a container type for one-of types. */
export type MeteredComponentPricingScheme = PricingSchemeEnum;

export const meteredComponentPricingSchemeSchema: Schema<MeteredComponentPricingScheme> = oneOf(
  [pricingSchemeEnumSchema]
);

export namespace MeteredComponentPricingScheme {
  /**
  * Validation method to narrow down union type to PricingSchemeEnum type case.
  *
  * This is Pricing Scheme case.
  */
  export function isPricingSchemeEnum(value: unknown): value is PricingSchemeEnum {
    const validationResult = validateAndMap(value, pricingSchemeEnumSchema);
    return validationResult.errors === false;
  }
}
