/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema } from '../schema';

export interface AccountBalance {
  /** The balance in cents. */
  balanceInCents?: bigint;
}

export const accountBalanceSchema: Schema<AccountBalance> = object({
  balanceInCents: ['balance_in_cents', optional(bigint())],
});
