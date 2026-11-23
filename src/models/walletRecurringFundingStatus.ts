/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for WalletRecurringFundingStatus
 */
export enum WalletRecurringFundingStatus {
  Active = 'active',
  Erroring = 'erroring',
  Stopped = 'stopped',
}

/**
 * Schema for WalletRecurringFundingStatus
 */
export const walletRecurringFundingStatusSchema: Schema<WalletRecurringFundingStatus> = stringEnum(
  WalletRecurringFundingStatus
);
