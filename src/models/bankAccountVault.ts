/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BankAccountVault
 */
export enum BankAccountVault {
  Authorizenet = 'authorizenet',
  BlueSnap = 'blue_snap',
  Bogus = 'bogus',
  Forte = 'forte',
  Gocardless = 'gocardless',
  MaxioPayments = 'maxio_payments',
  Maxp = 'maxp',
  StripeConnect = 'stripe_connect',
}

/**
 * Schema for BankAccountVault
 */
export const bankAccountVaultSchema: Schema<BankAccountVault> = stringEnum(
  BankAccountVault
);
