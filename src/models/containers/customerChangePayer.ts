/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  CustomerPayerChange,
  customerPayerChangeSchema,
} from '../customerPayerChange';

/** This is a container type for one-of types. */
export type CustomerChangePayer = CustomerPayerChange;

export const customerChangePayerSchema: Schema<CustomerChangePayer> = oneOf([
  customerPayerChangeSchema,
]);

export namespace CustomerChangePayer {
  /**
  * Validation method to narrow down union type to CustomerPayerChange type case.
  *
  * This is Customer Payer Change case.
  */
  export function isCustomerPayerChange(value: unknown): value is CustomerPayerChange {
    const validationResult = validateAndMap(value, customerPayerChangeSchema);
    return validationResult.errors === false;
  }
}
