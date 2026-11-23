/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  WalletTransaction,
  walletTransactionSchema,
} from './walletTransaction.js';

/** Returned by [Create Wallet Transaction]($e/Wallet%20Transactions/createWalletTransaction). `wallet_transactions` and `balance` are always present. `requested_amount`, `drained_amount`, and `rejected_amount` are present only when the request's `kind` was `debit`. */
export interface WalletTransactionResultResponse {
  walletTransactions: WalletTransaction[];
  /** `kind: debit` only. The amount that was requested, as a decimal string. */
  requestedAmount?: string;
  /** `kind: debit` only. The amount actually drained from the wallet's grants, as a decimal string. */
  drainedAmount?: string;
  /** `kind: debit` only, as a decimal string. Under `hard_stop_overflow: discard`, this is the requested amount minus what the wallet could cover (`"0.0"` on a full drain). Always `"0.0"` under `allow_negative`; nothing is rejected, and the balance goes negative instead. */
  rejectedAmount?: string;
  /** The wallet's new balance, as a decimal string. */
  balance: string;
  [key: string]: unknown;
}

export const walletTransactionResultResponseSchema: Schema<WalletTransactionResultResponse> = lazy(
  () =>
    expandoObject({
      walletTransactions: [
        'wallet_transactions',
        array(walletTransactionSchema),
      ],
      requestedAmount: ['requested_amount', optional(string())],
      drainedAmount: ['drained_amount', optional(string())],
      rejectedAmount: ['rejected_amount', optional(string())],
      balance: ['balance', string()],
    })
);
