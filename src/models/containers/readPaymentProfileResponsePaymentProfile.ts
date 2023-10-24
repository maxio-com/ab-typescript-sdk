/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  BankAccountPaymentProfile,
  bankAccountPaymentProfileSchema,
} from '../bankAccountPaymentProfile';
import {
  CreditCardPaymentProfile,
  creditCardPaymentProfileSchema,
} from '../creditCardPaymentProfile';

/** This is a container type for one-of types. */
export type ReadPaymentProfileResponsePaymentProfile = BankAccountPaymentProfile | CreditCardPaymentProfile;

export const readPaymentProfileResponsePaymentProfileSchema: Schema<ReadPaymentProfileResponsePaymentProfile> = oneOf(
  [bankAccountPaymentProfileSchema, creditCardPaymentProfileSchema]
);

export namespace ReadPaymentProfileResponsePaymentProfile {
  /**
  * Validation method to narrow down union type to BankAccountPaymentProfile type case.
  *
  * This is Bank Account Payment Profile case.
  */
  export function isBankAccountPaymentProfile(value: unknown): value is BankAccountPaymentProfile {
    const validationResult = validateAndMap(value, bankAccountPaymentProfileSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CreditCardPaymentProfile type case.
  *
  * This is Credit Card Payment Profile case.
  */
  export function isCreditCardPaymentProfile(value: unknown): value is CreditCardPaymentProfile {
    const validationResult = validateAndMap(value, creditCardPaymentProfileSchema);
    return validationResult.errors === false;
  }
}
