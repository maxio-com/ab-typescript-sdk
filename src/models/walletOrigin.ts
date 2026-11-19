/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for WalletOrigin
 */
export enum WalletOrigin {
  Manual = 'manual',
  Feature = 'feature',
}

/**
 * Schema for WalletOrigin
 */
export const walletOriginSchema: Schema<WalletOrigin> = stringEnum(
  WalletOrigin
);
