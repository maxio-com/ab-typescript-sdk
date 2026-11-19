/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, number, Schema } from '../schema.js';
import {
  WalletProductActiveWallet,
  walletProductActiveWalletSchema,
} from './walletProductActiveWallet.js';

export interface ActiveWallets {
  /** Total count of active wallets drawing on this product. */
  total: number;
  /** Up to 50 of the most recently created active wallets, newest first. */
  sample: WalletProductActiveWallet[];
  [key: string]: unknown;
}

export const activeWalletsSchema: Schema<ActiveWallets> = lazy(() =>
  expandoObject({
    total: ['total', number()],
    sample: ['sample', array(walletProductActiveWalletSchema)],
  })
);
