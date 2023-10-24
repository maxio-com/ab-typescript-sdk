/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import { PricePointType, pricePointTypeSchema } from '../pricePointType';
import {
  PricePointTypeOneOf0,
  pricePointTypeOneOf0Schema,
} from '../pricePointTypeOneOf0';

/** This is a container type for one-of types. */
export type SubscriptionComponentPricePointType = PricePointTypeOneOf0 | PricePointType;

export const subscriptionComponentPricePointTypeSchema: Schema<SubscriptionComponentPricePointType> = oneOf(
  [pricePointTypeOneOf0Schema, pricePointTypeSchema]
);

export namespace SubscriptionComponentPricePointType {
  /**
  * Validation method to narrow down union type to PricePointTypeOneOf0 type case.
  *
  * This is PricePointType_OneOf0 case.
  */
  export function isPricePointTypeOneOf0(value: unknown): value is PricePointTypeOneOf0 {
    const validationResult = validateAndMap(value, pricePointTypeOneOf0Schema);
    return validationResult.errors === false;
  }

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
