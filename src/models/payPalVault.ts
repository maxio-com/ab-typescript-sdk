/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayPalVault
 */
export enum PayPalVault {
  BraintreeBlue = 'braintree_blue',
  Paypal = 'paypal',
  Moduslink = 'moduslink',
  PaypalComplete = 'paypal_complete',
}

/**
 * Schema for PayPalVault
 */
export const payPalVaultSchema: Schema<PayPalVault> = stringEnum(PayPalVault);
