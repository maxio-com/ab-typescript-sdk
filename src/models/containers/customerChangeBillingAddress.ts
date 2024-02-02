/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import { AddressChange, addressChangeSchema } from '../addressChange';

/** This is a container type for one-of types. */
export type CustomerChangeBillingAddress = AddressChange;

export const customerChangeBillingAddressSchema: Schema<CustomerChangeBillingAddress> = oneOf(
  [addressChangeSchema]
);

export namespace CustomerChangeBillingAddress {
  /**
  * Validation method to narrow down union type to AddressChange type case.
  *
  * This is Address Change case.
  */
  export function isAddressChange(value: unknown): value is AddressChange {
    const validationResult = validateAndMap(value, addressChangeSchema);
    return validationResult.errors === false;
  }
}
