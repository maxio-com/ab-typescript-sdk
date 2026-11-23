/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema, string } from '../schema.js';
import { WalletPurchase, walletPurchaseSchema } from './walletPurchase.js';

export interface WalletPurchaseResultResponse {
  walletPurchases: WalletPurchase[];
  /** The wallet's new balance, as a decimal string. */
  balance: string;
  [key: string]: unknown;
}

export const walletPurchaseResultResponseSchema: Schema<WalletPurchaseResultResponse> = lazy(
  () =>
    expandoObject({
      walletPurchases: ['wallet_purchases', array(walletPurchaseSchema)],
      balance: ['balance', string()],
    })
);
