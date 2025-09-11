/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, isMappedValueValidForSchema, Schema } from '../../schema.js';
import {
  PaymentMethodApplePay,
  paymentMethodApplePaySchema,
} from '../paymentMethodApplePay.js';
import {
  PaymentMethodBankAccount,
  paymentMethodBankAccountSchema,
} from '../paymentMethodBankAccount.js';
import {
  PaymentMethodCreditCard,
  paymentMethodCreditCardSchema,
} from '../paymentMethodCreditCard.js';
import {
  PaymentMethodExternal,
  paymentMethodExternalSchema,
} from '../paymentMethodExternal.js';
import {
  PaymentMethodPaypal,
  paymentMethodPaypalSchema,
} from '../paymentMethodPaypal.js';

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
    return isMappedValueValidForSchema(value, paymentMethodApplePaySchema);
  }

  /**
   * Validation method to narrow down union type to PaymentMethodBankAccount type case.
   *
   * This is Payment Method Bank Account case.
   */
  export function isPaymentMethodBankAccount(
    value: unknown
  ): value is PaymentMethodBankAccount {
    return isMappedValueValidForSchema(value, paymentMethodBankAccountSchema);
  }

  /**
   * Validation method to narrow down union type to PaymentMethodCreditCard type case.
   *
   * This is Payment Method Credit Card case.
   */
  export function isPaymentMethodCreditCard(
    value: unknown
  ): value is PaymentMethodCreditCard {
    return isMappedValueValidForSchema(value, paymentMethodCreditCardSchema);
  }

  /**
   * Validation method to narrow down union type to PaymentMethodExternal type case.
   *
   * This is Payment Method External case.
   */
  export function isPaymentMethodExternal(
    value: unknown
  ): value is PaymentMethodExternal {
    return isMappedValueValidForSchema(value, paymentMethodExternalSchema);
  }

  /**
   * Validation method to narrow down union type to PaymentMethodPaypal type case.
   *
   * This is Payment Method Paypal case.
   */
  export function isPaymentMethodPaypal(
    value: unknown
  ): value is PaymentMethodPaypal {
    return isMappedValueValidForSchema(value, paymentMethodPaypalSchema);
  }
}
