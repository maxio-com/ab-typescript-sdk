/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  ApplePayPaymentProfile,
  applePayPaymentProfileSchema,
} from '../applePayPaymentProfile';
import {
  BankAccountPaymentProfile,
  bankAccountPaymentProfileSchema,
} from '../bankAccountPaymentProfile';
import {
  CreditCardPaymentProfile,
  creditCardPaymentProfileSchema,
} from '../creditCardPaymentProfile';
import {
  PaypalPaymentProfile,
  paypalPaymentProfileSchema,
} from '../paypalPaymentProfile';

/** This is a container type for any-of types. */
export type PaymentProfile =
  | ApplePayPaymentProfile
  | BankAccountPaymentProfile
  | CreditCardPaymentProfile
  | PaypalPaymentProfile;

const discriminatorMap = {
  'apple_pay': applePayPaymentProfileSchema,
  'bank_account': bankAccountPaymentProfileSchema,
  'credit_card': creditCardPaymentProfileSchema,
  'paypal_account': paypalPaymentProfileSchema,
};

export const paymentProfileSchema: Schema<PaymentProfile> = anyOf(
  [
    applePayPaymentProfileSchema,
    bankAccountPaymentProfileSchema,
    creditCardPaymentProfileSchema,
    paypalPaymentProfileSchema,
  ],
  discriminatorMap,
  'paymentType'
);

export namespace PaymentProfile {
  /**
   * Validation method to narrow down union type to ApplePayPaymentProfile type case.
   *
   * This is ApplePay Payment Profile case.
   */
  export function isApplePayPaymentProfile(
    value: unknown
  ): value is ApplePayPaymentProfile {
    const validationResult = validateAndMap(
      value,
      applePayPaymentProfileSchema
    );
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to BankAccountPaymentProfile type case.
   *
   * This is Bank Account Payment Profile case.
   */
  export function isBankAccountPaymentProfile(
    value: unknown
  ): value is BankAccountPaymentProfile {
    const validationResult = validateAndMap(
      value,
      bankAccountPaymentProfileSchema
    );
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to CreditCardPaymentProfile type case.
   *
   * This is Credit Card Payment Profile case.
   */
  export function isCreditCardPaymentProfile(
    value: unknown
  ): value is CreditCardPaymentProfile {
    const validationResult = validateAndMap(
      value,
      creditCardPaymentProfileSchema
    );
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to PaypalPaymentProfile type case.
   *
   * This is Paypal Payment Profile case.
   */
  export function isPaypalPaymentProfile(
    value: unknown
  ): value is PaypalPaymentProfile {
    const validationResult = validateAndMap(value, paypalPaymentProfileSchema);
    return validationResult.errors === false;
  }
}
