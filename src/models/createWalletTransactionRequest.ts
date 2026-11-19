/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  WalletTransaction1,
  walletTransaction1Schema,
} from './walletTransaction1.js';

export interface CreateWalletTransactionRequest {
  walletTransaction: WalletTransaction1;
  [key: string]: unknown;
}

export const createWalletTransactionRequestSchema: Schema<CreateWalletTransactionRequest> = lazy(
  () =>
    expandoObject({
      walletTransaction: ['wallet_transaction', walletTransaction1Schema],
    })
);
