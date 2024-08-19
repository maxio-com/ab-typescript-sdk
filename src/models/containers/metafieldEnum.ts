/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, oneOf, Schema, string } from '../../schema';

/** This is a container type for one-of types. */
export type MetafieldEnum = string | string[];

export const metafieldEnumSchema: Schema<MetafieldEnum> = oneOf([
  string(),
  array(string()),
]);

export namespace MetafieldEnum {
  /**
   * Validation method to narrow down union type to string type case.
   *
   * This is String case.
   */
  export function isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  /**
   * Validation method to narrow down union type to string[] type case.
   *
   * This is Array of String case.
   */
  export function isArrayOfString(value: unknown): value is string[] {
    return (
      Array.isArray(value) && value.every((item) => typeof item === 'string')
    );
  }
}
