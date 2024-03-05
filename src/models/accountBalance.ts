/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, optional, Schema } from '../schema';

export interface AccountBalance {
  /** The balance in cents. */
  balanceInCents?: bigint;
  [key: string]: unknown;
}

export const accountBalanceSchema: Schema<AccountBalance> = expandoObject({
  balanceInCents: ['balance_in_cents', optional(bigint())],
});
