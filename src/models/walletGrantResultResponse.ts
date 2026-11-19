/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema, string } from '../schema.js';
import {
  WalletTransaction,
  walletTransactionSchema,
} from './walletTransaction.js';

/** Returned by an adjustment: the ledger row written, plus the wallet's new balance. */
export interface WalletGrantResultResponse {
  walletTransactions: WalletTransaction[];
  /** The wallet's new balance, as a decimal string. */
  balance: string;
  [key: string]: unknown;
}

export const walletGrantResultResponseSchema: Schema<WalletGrantResultResponse> = lazy(
  () =>
    expandoObject({
      walletTransactions: [
        'wallet_transactions',
        array(walletTransactionSchema),
      ],
      balance: ['balance', string()],
    })
);
