/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  AllocationPayment,
  allocationPaymentSchema,
} from '../allocationPayment';

/** This is a container type for any-of types. */
export type AllocationPayment = AllocationPayment;

export const allocationPaymentSchema: Schema<AllocationPayment> = anyOf([
  allocationPaymentSchema,
]);

export namespace AllocationPayment {
  /**
  * Validation method to narrow down union type to AllocationPayment type case.
  *
  * This is Allocation Payment case.
  */
  export function isAllocationPayment(value: unknown): value is AllocationPayment {
    const validationResult = validateAndMap(value, allocationPaymentSchema);
    return validationResult.errors === false;
  }
}
