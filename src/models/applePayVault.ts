/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for ApplePayVault
 */
export enum ApplePayVault {
  BraintreeBlue = 'braintree_blue',
}

/**
 * Schema for ApplePayVault
 */
export const applePayVaultSchema: Schema<ApplePayVault> = stringEnum(
  ApplePayVault
);
