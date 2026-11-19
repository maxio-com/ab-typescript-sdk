/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  AdjustmentAmount,
  adjustmentAmountSchema,
} from './containers/adjustmentAmount.js';

export interface Adjustment {
  /** Signed: positive adds units to the grant, negative removes them. Bounded below by the grant's `posted_remaining` (a correction can't drive it negative) and above by the grant's `original` (a correction can't credit past what was originally granted). An out-of-bounds value is rejected rather than clamped. Zero is rejected. Without a `grant_id` (an overdraft correction), the amount must be positive, can't exceed the usage the overdraft entry still records, and can't exceed the overdraft the wallet still owes. Encoded as a decimal string with at most 8 fractional digits. Send fractional values as strings: a JSON number with a decimal point is rejected with `422`, because a double-precision float may already have lost precision before the request arrives. */
  amount: AdjustmentAmount;
  /** Required. Lands on the resulting ledger row's `memo`. */
  reason: string;
  /** The grant to correct. Must belong to this wallet. Required unless `source_transaction_id` names an overdraft entry (a `debit` with no `grant_id`, written when an `allow_negative` wallet consumes past its grants). For an overdraft entry, omit it: sending one returns `422`, and the correction credits the wallet's outstanding overdraft instead of any grant. */
  grantId?: number | null;
  /** (Optional) The `debit` row this correction is fixing. Must belong to this wallet, and must name a row of kind `debit`; grant and adjustment rows are append-only history, corrected by posting a further adjustment rather than by pointing at them. For a grant-attributed debit, it's recorded on the resulting ledger row for audit only: it does not change how `amount` is applied, and more than one adjustment may name the same row. For an overdraft entry, it decides the path: omit `grant_id`, and the correction is credit-only, bounded by the usage the entry still records and by the overdraft the wallet still owes. */
  sourceTransactionId?: number | null;
  /** (Optional) An optimistic-concurrency check for a caller whose `amount` was derived from the grant's own remainder. Send the grant's `posted_remaining`, not its `remaining`: on a metered wallet read through [Read Wallet]($e/Wallets/readWallet), `remaining` also subtracts usage not yet posted, so it can differ from what the adjustment checks. If given and the grant's current `posted_remaining` no longer matches, the request is rejected with `409` and nothing is written. Compared numerically, so `"100"` and `"100.00000000"` both match a `posted_remaining` of `100`. Omit the field entirely to skip the check; sending it as an empty string is treated as a malformed value (`422`), not as an omission. */
  expectedRemaining?: string | null;
  /** (Optional) An optimistic-concurrency check for a caller whose `amount` was derived from a usage entry, sent together with `source_transaction_id`: the entry's `source_corrections_total` as the caller last read it (`"0"` if none). If the sum the server computes no longer matches, the request is rejected with `409` and nothing is written. This is what catches a correction posted between that read and this request. Ignored unless `source_transaction_id` is also given. */
  expectedSourceCorrections?: string | null;
  [key: string]: unknown;
}

export const adjustmentSchema: Schema<Adjustment> = lazy(() =>
  expandoObject({
    amount: ['amount', adjustmentAmountSchema],
    reason: ['reason', string()],
    grantId: ['grant_id', optional(nullable(number()))],
    sourceTransactionId: [
      'source_transaction_id',
      optional(nullable(number())),
    ],
    expectedRemaining: ['expected_remaining', optional(nullable(string()))],
    expectedSourceCorrections: [
      'expected_source_corrections',
      optional(nullable(string())),
    ],
  })
);
