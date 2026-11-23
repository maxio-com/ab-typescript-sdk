/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for WalletStatus
 */
export enum WalletStatus {
  Active = 'active',
  Archived = 'archived',
}

/**
 * Schema for WalletStatus
 */
export const walletStatusSchema: Schema<WalletStatus> = stringEnum(
  WalletStatus
);
