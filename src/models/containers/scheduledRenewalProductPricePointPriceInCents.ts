/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, oneOf, Schema, string } from '../../schema.js';

/** This is a container type for one-of types. */
export type ScheduledRenewalProductPricePointPriceInCents = string | bigint;

export const scheduledRenewalProductPricePointPriceInCentsSchema: Schema<ScheduledRenewalProductPricePointPriceInCents> = oneOf(
  [string(), bigint()]
);

export namespace ScheduledRenewalProductPricePointPriceInCents {
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
