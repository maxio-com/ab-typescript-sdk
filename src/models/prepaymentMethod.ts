/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PrepaymentMethod
 */
export enum PrepaymentMethod {
  Check = 'check',
  Cash = 'cash',
  MoneyOrder = 'money_order',
  Ach = 'ach',
  PaypalAccount = 'paypal_account',
  CreditCardOnFile = 'credit_card_on_file',
  Other = 'other',
}

/**
 * Schema for PrepaymentMethod
 */
export const prepaymentMethodSchema: Schema<PrepaymentMethod> = stringEnum(PrepaymentMethod);
