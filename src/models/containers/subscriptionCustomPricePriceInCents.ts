/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, oneOf, Schema, string } from '../../schema';

/** This is a container type for one-of types. */
export type SubscriptionCustomPricePriceInCents = string | bigint;

export const subscriptionCustomPricePriceInCentsSchema: Schema<SubscriptionCustomPricePriceInCents> = oneOf(
  [string(), bigint()]
);

export namespace SubscriptionCustomPricePriceInCents {
  /**
   * Validation method to narrow down union type to string type case.
   *
   * This is String case.
   */
  export function isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  /**
   * Validation method to narrow down union type to bigint type case.
   *
   * This is Long case.
   */
  export function isBigint(value: unknown): value is bigint {
    return typeof value === 'bigint';
  }
}
