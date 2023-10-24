/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  PaymentMethodApplePayType,
  paymentMethodApplePayTypeSchema,
} from '../paymentMethodApplePayType';
import {
  PaymentMethodBankAccountType,
  paymentMethodBankAccountTypeSchema,
} from '../paymentMethodBankAccountType';
import {
  PaymentMethodCreditCardType,
  paymentMethodCreditCardTypeSchema,
} from '../paymentMethodCreditCardType';
import {
  PaymentMethodExternalType,
  paymentMethodExternalTypeSchema,
} from '../paymentMethodExternalType';
import {
  PaymentMethodPaypalType,
  paymentMethodPaypalTypeSchema,
} from '../paymentMethodPaypalType';

/** This is a container type for one-of types. */
export type ApplyPaymentEventDataPaymentMethod = PaymentMethodApplePayType | PaymentMethodBankAccountType | PaymentMethodCreditCardType | PaymentMethodExternalType | PaymentMethodPaypalType;

export const applyPaymentEventDataPaymentMethodSchema: Schema<ApplyPaymentEventDataPaymentMethod> = oneOf(
  [
    paymentMethodApplePayTypeSchema,
    paymentMethodBankAccountTypeSchema,
    paymentMethodCreditCardTypeSchema,
    paymentMethodExternalTypeSchema,
    paymentMethodPaypalTypeSchema,
  ]
);

export namespace ApplyPaymentEventDataPaymentMethod {
  /**
  * Validation method to narrow down union type to PaymentMethodApplePayType type case.
  *
  * This is Payment Method Apple Pay Type case.
  */
  export function isPaymentMethodApplePayType(value: unknown): value is PaymentMethodApplePayType {
    const validationResult = validateAndMap(value, paymentMethodApplePayTypeSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PaymentMethodBankAccountType type case.
  *
  * This is Payment Method Bank Account Type case.
  */
  export function isPaymentMethodBankAccountType(value: unknown): value is PaymentMethodBankAccountType {
    const validationResult = validateAndMap(value, paymentMethodBankAccountTypeSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PaymentMethodCreditCardType type case.
  *
  * This is Payment Method Credit Card Type case.
  */
  export function isPaymentMethodCreditCardType(value: unknown): value is PaymentMethodCreditCardType {
    const validationResult = validateAndMap(value, paymentMethodCreditCardTypeSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PaymentMethodExternalType type case.
  *
  * This is Payment Method External Type case.
  */
  export function isPaymentMethodExternalType(value: unknown): value is PaymentMethodExternalType {
    const validationResult = validateAndMap(value, paymentMethodExternalTypeSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to PaymentMethodPaypalType type case.
  *
  * This is Payment Method Paypal Type case.
  */
  export function isPaymentMethodPaypalType(value: unknown): value is PaymentMethodPaypalType {
    const validationResult = validateAndMap(value, paymentMethodPaypalTypeSchema);
    return validationResult.errors === false;
  }
}
