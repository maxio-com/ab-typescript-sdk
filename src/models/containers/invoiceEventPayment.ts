/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  PaymentMethodApplePay,
  paymentMethodApplePaySchema,
} from '../paymentMethodApplePay';
import {
  PaymentMethodBankAccount,
  paymentMethodBankAccountSchema,
} from '../paymentMethodBankAccount';
import {
  PaymentMethodCreditCard,
  paymentMethodCreditCardSchema,
} from '../paymentMethodCreditCard';
import {
  PaymentMethodExternal,
  paymentMethodExternalSchema,
} from '../paymentMethodExternal';
import {
  PaymentMethodPaypal,
  paymentMethodPaypalSchema,
} from '../paymentMethodPaypal';

/** This is a container type for any-of types. */
export type InvoiceEventPayment =
  | PaymentMethodApplePay
  | PaymentMethodBankAccount
  | PaymentMethodCreditCard
  | PaymentMethodExternal
  | PaymentMethodPaypal;

const discriminatorMap = {
  'apple_pay': paymentMethodApplePaySchema,
  'bank_account': paymentMethodBankAccountSchema,
  'credit_card': paymentMethodCreditCardSchema,
  'external': paymentMethodExternalSchema,
  'paypal_account': paymentMethodPaypalSchema,
};

export const invoiceEventPaymentSchema: Schema<InvoiceEventPayment> = anyOf(
  [
    paymentMethodApplePaySchema,
    paymentMethodBankAccountSchema,
    paymentMethodCreditCardSchema,
    paymentMethodExternalSchema,
    paymentMethodPaypalSchema,
  ],
  discriminatorMap,
  'type'
);

export namespace InvoiceEventPayment {
  /**
   * Validation method to narrow down union type to PaymentMethodApplePay type case.
   *
   * This is Payment Method Apple Pay case.
   */
  export function isPaymentMethodApplePay(
    value: unknown
  ): value is PaymentMethodApplePay {
    const validationResult = validateAndMap(value, paymentMethodApplePaySchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to PaymentMethodBankAccount type case.
   *
   * This is Payment Method Bank Account case.
   */
  export function isPaymentMethodBankAccount(
    value: unknown
  ): value is PaymentMethodBankAccount {
    const validationResult = validateAndMap(
      value,
      paymentMethodBankAccountSchema
    );
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to PaymentMethodCreditCard type case.
   *
   * This is Payment Method Credit Card case.
   */
  export function isPaymentMethodCreditCard(
    value: unknown
  ): value is PaymentMethodCreditCard {
    const validationResult = validateAndMap(
      value,
      paymentMethodCreditCardSchema
    );
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to PaymentMethodExternal type case.
   *
   * This is Payment Method External case.
   */
  export function isPaymentMethodExternal(
    value: unknown
  ): value is PaymentMethodExternal {
    const validationResult = validateAndMap(value, paymentMethodExternalSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to PaymentMethodPaypal type case.
   *
   * This is Payment Method Paypal case.
   */
  export function isPaymentMethodPaypal(
    value: unknown
  ): value is PaymentMethodPaypal {
    const validationResult = validateAndMap(value, paymentMethodPaypalSchema);
    return validationResult.errors === false;
  }
}
