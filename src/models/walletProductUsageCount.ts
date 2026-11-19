/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema } from '../schema.js';

/** A rollup of what's using this Wallet Product, for the catalog listing. */
export interface WalletProductUsageCount {
  /** Number of wallet templates billing through this product, whether or not any wallet has been created from them yet. */
  walletConfigurations: number;
  /** Number of active (non-archived) wallets currently denominated by this product. */
  activeWallets: number;
  [key: string]: unknown;
}

export const walletProductUsageCountSchema: Schema<WalletProductUsageCount> = expandoObject(
  {
    walletConfigurations: ['wallet_configurations', number()],
    activeWallets: ['active_wallets', number()],
  }
);
