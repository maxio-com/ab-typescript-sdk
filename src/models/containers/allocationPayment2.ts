/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  AllocationPayment,
  allocationPaymentSchema,
} from '../allocationPayment';

/** This is a container type for one-of types. */
export type AllocationPayment2 = AllocationPayment;

export const allocationPayment2Schema: Schema<AllocationPayment2> = oneOf([
  allocationPaymentSchema,
]);

export namespace AllocationPayment2 {
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
