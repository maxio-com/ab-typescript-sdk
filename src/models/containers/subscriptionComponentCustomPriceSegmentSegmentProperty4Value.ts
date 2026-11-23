/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, oneOf, Schema, string } from '../../schema.js';

/** This is a container type for one-of types. */
export type SubscriptionComponentCustomPriceSegmentSegmentProperty4Value =
  | string
  | number;

export const subscriptionComponentCustomPriceSegmentSegmentProperty4ValueSchema: Schema<SubscriptionComponentCustomPriceSegmentSegmentProperty4Value> = oneOf(
  [string(), number()]
);

export namespace SubscriptionComponentCustomPriceSegmentSegmentProperty4Value {
  /**
   * Validation method to narrow down union type to string type case.
   *
   * This is String case.
   */
  export function isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  /**
   * Validation method to narrow down union type to number type case.
   *
   * This is Precision case.
   */
  export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }
}
