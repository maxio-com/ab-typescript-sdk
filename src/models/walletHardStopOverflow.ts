/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for WalletHardStopOverflow
 */
export enum WalletHardStopOverflow {
  Discard = 'discard',
  AllowNegative = 'allow_negative',
}

/**
 * Schema for WalletHardStopOverflow
 */
export const walletHardStopOverflowSchema: Schema<WalletHardStopOverflow> = stringEnum(
  WalletHardStopOverflow
);
