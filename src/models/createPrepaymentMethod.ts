/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CreatePrepaymentMethod
 */
export enum CreatePrepaymentMethod {
  Check = 'check',
  Cash = 'cash',
  MoneyOrder = 'money_order',
  Ach = 'ach',
  PaypalAccount = 'paypal_account',
  CreditCard = 'credit_card',
  CreditCardOnFile = 'credit_card_on_file',
  Other = 'other',
}

/**
 * Schema for CreatePrepaymentMethod
 */
export const  createPrepaymentMethodSchema: Schema<CreatePrepaymentMethod> = stringEnum(CreatePrepaymentMethod);
