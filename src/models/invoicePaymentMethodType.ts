/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvoicePaymentMethodType
 */
export enum InvoicePaymentMethodType {
  CreditCard = 'credit_card',
  Check = 'check',
  Cash = 'cash',
  MoneyOrder = 'money_order',
  Ach = 'ach',
  Other = 'other',
}

/**
 * Schema for InvoicePaymentMethodType
 */
export const invoicePaymentMethodTypeSchema: Schema<InvoicePaymentMethodType> = stringEnum(
  InvoicePaymentMethodType
);
