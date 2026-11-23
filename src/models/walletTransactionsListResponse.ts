/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import {
  ListPublicKeysMeta,
  listPublicKeysMetaSchema,
} from './listPublicKeysMeta.js';
import {
  WalletTransaction,
  walletTransactionSchema,
} from './walletTransaction.js';

export interface WalletTransactionsListResponse {
  walletTransactions: WalletTransaction[];
  meta: ListPublicKeysMeta;
  [key: string]: unknown;
}

export const walletTransactionsListResponseSchema: Schema<WalletTransactionsListResponse> = lazy(
  () =>
    expandoObject({
      walletTransactions: [
        'wallet_transactions',
        array(walletTransactionSchema),
      ],
      meta: ['meta', listPublicKeysMetaSchema],
    })
);
