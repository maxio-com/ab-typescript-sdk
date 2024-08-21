/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, oneOf, Schema, string } from '../../schema';

/** This is a container type for one-of types. */
export type CreateSegmentSegmentProperty4Value = string | number | boolean;

export const createSegmentSegmentProperty4ValueSchema: Schema<CreateSegmentSegmentProperty4Value> = oneOf(
  [string(), number(), boolean()]
);

export namespace CreateSegmentSegmentProperty4Value {
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

  /**
   * Validation method to narrow down union type to boolean type case.
   *
   * This is Boolean case.
   */
  export function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
  }
}
