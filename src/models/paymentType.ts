/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentType
 */
export enum PaymentType {
  CreditCard = 'credit_card',
  BankAccount = 'bank_account',
  PaypalAccount = 'paypal_account',
}

/**
 * Schema for PaymentType
 */
export const paymentTypeSchema: Schema<PaymentType> = stringEnum(PaymentType);
