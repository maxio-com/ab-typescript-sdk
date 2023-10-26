/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import { PricePointType, pricePointTypeSchema } from '../pricePointType';

/** This is a container type for one-of types. */
export type SubscriptionComponentPricePointType = PricePointType;

export const subscriptionComponentPricePointTypeSchema: Schema<SubscriptionComponentPricePointType> = oneOf(
  [pricePointTypeSchema]
);

export namespace SubscriptionComponentPricePointType {
  /**
  * Validation method to narrow down union type to PricePointType type case.
  *
  * This is Price Point Type case.
  */
  export function isPricePointType(value: unknown): value is PricePointType {
    const validationResult = validateAndMap(value, pricePointTypeSchema);
    return validationResult.errors === false;
  }
}
