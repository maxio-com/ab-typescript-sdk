/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Wallet, walletSchema } from './wallet.js';

export interface WalletResponse {
  /** A balance, denominated in the unit of a Wallet Product, owned by a subscription. Grants and recurring funding schedules are embedded so a single read shows the full balance breakdown. */
  wallet: Wallet;
  [key: string]: unknown;
}

export const walletResponseSchema: Schema<WalletResponse> = lazy(() =>
  expandoObject({ wallet: ['wallet', walletSchema] })
);
