/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BankAccountVault
 */
export enum BankAccountVault {
  Bogus = 'bogus',
  Authorizenet = 'authorizenet',
  StripeConnect = 'stripe_connect',
  BraintreeBlue = 'braintree_blue',
  Gocardless = 'gocardless',
}

/**
 * Schema for BankAccountVault
 */
export const bankAccountVaultSchema: Schema<BankAccountVault> = stringEnum(BankAccountVault);
