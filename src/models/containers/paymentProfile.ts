/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, isMappedValueValidForSchema, Schema } from '../../schema.js';
import {
  ApplePayPaymentProfile,
  applePayPaymentProfileSchema,
} from '../applePayPaymentProfile.js';
import {
  BankAccountPaymentProfile,
  bankAccountPaymentProfileSchema,
} from '../bankAccountPaymentProfile.js';
import {
  CreditCardPaymentProfile,
  creditCardPaymentProfileSchema,
} from '../creditCardPaymentProfile.js';
import {
  PaypalPaymentProfile,
  paypalPaymentProfileSchema,
} from '../paypalPaymentProfile.js';

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
  'payment_type'
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
    return isMappedValueValidForSchema(value, applePayPaymentProfileSchema);
  }

  /**
   * Validation method to narrow down union type to BankAccountPaymentProfile type case.
   *
   * This is Bank Account Payment Profile case.
   */
  export function isBankAccountPaymentProfile(
    value: unknown
  ): value is BankAccountPaymentProfile {
    return isMappedValueValidForSchema(value, bankAccountPaymentProfileSchema);
  }

  /**
   * Validation method to narrow down union type to CreditCardPaymentProfile type case.
   *
   * This is Credit Card Payment Profile case.
   */
  export function isCreditCardPaymentProfile(
    value: unknown
  ): value is CreditCardPaymentProfile {
    return isMappedValueValidForSchema(value, creditCardPaymentProfileSchema);
  }

  /**
   * Validation method to narrow down union type to PaypalPaymentProfile type case.
   *
   * This is Paypal Payment Profile case.
   */
  export function isPaypalPaymentProfile(
    value: unknown
  ): value is PaypalPaymentProfile {
    return isMappedValueValidForSchema(value, paypalPaymentProfileSchema);
  }
}
