/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  WalletTransaction1Amount,
  walletTransaction1AmountSchema,
} from './containers/walletTransaction1Amount.js';
import { Kind1, kind1Schema } from './kind1.js';

export interface WalletTransaction1 {
  /** Determines the direction of the movement. The amount itself is always sent positive. */
  kind: Kind1;
  /** Always positive; `kind` determines the sign written to the ledger. Encoded as a decimal string with at most 8 fractional digits. Send fractional values as strings: a JSON number with a decimal point is rejected with `422`, because a double-precision float may already have lost precision before the request arrives. */
  amount: WalletTransaction1Amount;
  memo?: string | null;
  /** An expiration for the grant this creates. Only accepted with `kind: grant`; sending it with `kind: debit` is rejected. Omit it for an evergreen grant. Accepts either a bare calendar date (`YYYY-MM-DD`), resolved to the end of that day in the site's time zone, or a full timestamp. A calendar day that doesn't exist, such as `2027-02-30`, is rejected with `422` rather than rolled into the next month. */
  expiresAt?: string | null;
  [key: string]: unknown;
}

export const walletTransaction1Schema: Schema<WalletTransaction1> = lazy(() =>
  expandoObject({
    kind: ['kind', kind1Schema],
    amount: ['amount', walletTransaction1AmountSchema],
    memo: ['memo', optional(nullable(string()))],
    expiresAt: ['expires_at', optional(nullable(string()))],
  })
);
