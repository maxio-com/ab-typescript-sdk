/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvoiceEventPaymentMethod
 */
export enum InvoiceEventPaymentMethod {
  ApplePay = 'apple_pay',
  BankAccount = 'bank_account',
  CreditCard = 'credit_card',
  External = 'external',
  PaypalAccount = 'paypal_account',
}

/**
 * Schema for InvoiceEventPaymentMethod
 */
export const  invoiceEventPaymentMethodSchema: Schema<InvoiceEventPaymentMethod> = stringEnum(InvoiceEventPaymentMethod);
