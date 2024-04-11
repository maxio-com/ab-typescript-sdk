/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  PaymentForAllocation,
  paymentForAllocationSchema,
} from '../paymentForAllocation';

/** This is a container type for one-of types. */
export type AllocationPayment = PaymentForAllocation;

export const allocationPaymentSchema: Schema<AllocationPayment> = oneOf([
  paymentForAllocationSchema,
]);

export namespace AllocationPayment {
  /**
  * Validation method to narrow down union type to PaymentForAllocation type case.
  *
  * This is Payment for Allocation case.
  */
  export function isPaymentForAllocation(value: unknown): value is PaymentForAllocation {
    const validationResult = validateAndMap(value, paymentForAllocationSchema);
    return validationResult.errors === false;
  }
}
