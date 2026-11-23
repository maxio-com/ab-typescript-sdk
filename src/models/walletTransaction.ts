/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';

/** One append-only row on the wallet's ledger. Always appears bare inside a `wallet_transactions` array, never wrapped in its own key. */
export interface WalletTransaction {
  /** The Advanced Billing id of the ledger row. */
  id?: number;
  walletId?: number;
  /** The kind of ledger row. Known values: `grant`, `debit`, `adjustment`, `initial_balance`, and `expiration`. More kinds are expected over time, so treat this as an open string and don't fail on one you don't recognize. Only `grant` and `debit` are accepted on [Create Wallet Transaction]($e/Wallet%20Transactions/createWalletTransaction). `adjustment` rows are written by [Create Wallet Adjustment]($e/Wallet%20Adjustments/createWalletAdjustment), `initial_balance` rows only by a seeded [Create Wallet]($e/Wallets/createWallet), and `expiration` rows only by the automatic expiry sweep that writes off an unconsumed grant once its `expires_at` passes. */
  kind?: string;
  /** A decimal string, **signed** on this resource. Non-negative for grants, negative for debits and expirations, either sign for adjustments. A grant row written after an overdraft repayment carries only what was left after the repayment (possibly `"0.0"`), not the grant's `original`. */
  amount?: string;
  /** The grant this row is attributed to. `null` for an overdraft row (a `kind: debit` row draining the below-zero portion of a balance, attributed to no grant), for an overdraft-repayment row (the `kind: grant` row that pays an existing negative balance back to zero, written before any remainder becomes a new grant), and for an overdraft correction (a `kind: adjustment` row posted against an overdraft entry, which credits no grant). */
  grantId?: number | null;
  /** For an `adjustment` row posted against a specific usage entry, the id of the `debit` row it corrects. `null` for every other kind, and for adjustments made against a grant's balance directly. */
  sourceTransactionId?: number | null;
  /** For a `debit` row only, the signed sum (as a decimal string) of every adjustment posted against it so far (`"0.0"` when none). `null` for every other kind. The row's own `amount` is never rewritten, so a caller deriving the entry's corrected quantity nets this out of `amount`, and sends this value back as `expected_source_corrections` on a further correction. */
  sourceCorrectionsTotal?: string | null;
  /** The wallet's posted balance immediately after this row was applied, as a decimal string. Compare it with the wallet's `posted_balance`, not its `balance`. */
  balanceAfter?: string;
  /** For a row that closed a metered usage window (an hourly close, a depletion, or an expiry write-off), the start of that window. `null` on every other row. */
  meteredFromAt?: string | null;
  /** The end of the usage window this row closed. `null` on every other row. */
  meteredThroughAt?: string | null;
  /** The meter-to-wallet-unit conversion rate applied to compute this row's `amount`, as a decimal string. `null` on every other row. */
  conversionRateApplied?: string | null;
  /** The uid of the invoice behind a purchase's rows: the grant-creating row and, when the purchase repaid an overdraft, the repayment row. `null` on every other row. */
  invoiceUid?: string | null;
  /** Free-text note. For an `adjustment` row, carries the required `reason`. */
  memo?: string | null;
  createdAt?: string;
  [key: string]: unknown;
}

export const walletTransactionSchema: Schema<WalletTransaction> = expandoObject(
  {
    id: ['id', optional(number())],
    walletId: ['wallet_id', optional(number())],
    kind: ['kind', optional(string())],
    amount: ['amount', optional(string())],
    grantId: ['grant_id', optional(nullable(number()))],
    sourceTransactionId: [
      'source_transaction_id',
      optional(nullable(number())),
    ],
    sourceCorrectionsTotal: [
      'source_corrections_total',
      optional(nullable(string())),
    ],
    balanceAfter: ['balance_after', optional(string())],
    meteredFromAt: ['metered_from_at', optional(nullable(string()))],
    meteredThroughAt: ['metered_through_at', optional(nullable(string()))],
    conversionRateApplied: [
      'conversion_rate_applied',
      optional(nullable(string())),
    ],
    invoiceUid: ['invoice_uid', optional(nullable(string()))],
    memo: ['memo', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
  }
);
