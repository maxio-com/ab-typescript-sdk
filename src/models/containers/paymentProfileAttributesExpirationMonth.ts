/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, oneOf, Schema, string } from '../../schema';

/** This is a container type for one-of types. */
export type PaymentProfileAttributesExpirationMonth = number | string;

export const paymentProfileAttributesExpirationMonthSchema: Schema<PaymentProfileAttributesExpirationMonth> = oneOf(
  [number(), string()]
);

export namespace PaymentProfileAttributesExpirationMonth {
  /**
  * Validation method to narrow down union type to number type case.
  *
  * This is Number case.
  */
  export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }

  /**
  * Validation method to narrow down union type to string type case.
  *
  * This is String case.
  */
  export function isString(value: unknown): value is string {
    return typeof value === 'string';
  }
}
