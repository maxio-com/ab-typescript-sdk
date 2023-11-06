/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, oneOf, Schema, string, validateAndMap } from '../../schema';
import { CustomerError, customerErrorSchema } from '../customerError';

/** This is a container type for one-of types. */
export type CustomerErrorResponseErrors = CustomerError | string[];

export const customerErrorResponseErrorsSchema: Schema<CustomerErrorResponseErrors> = oneOf(
  [customerErrorSchema, array(string())]
);

export namespace CustomerErrorResponseErrors {
  /**
  * Validation method to narrow down union type to CustomerError type case.
  *
  * This is Customer Error case.
  */
  export function isCustomerError(value: unknown): value is CustomerError {
    const validationResult = validateAndMap(value, customerErrorSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to string[] type case.
  *
  * This is Array of String case.
  */
  export function isArrayOfString(value: unknown): value is string[] {
    return Array.isArray(value) && value.every((item) => typeof item === 'string');
  }
}
