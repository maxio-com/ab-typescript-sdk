/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, nullable, optional, Schema } from '../schema';

export interface AccountBalance {
  /** The balance in cents. */
  balanceInCents?: bigint;
  /** The automatic balance in cents. */
  automaticBalanceInCents?: bigint | null;
  /** The remittance balance in cents. */
  remittanceBalanceInCents?: bigint | null;
  [key: string]: unknown;
}

export const accountBalanceSchema: Schema<AccountBalance> = expandoObject({
  balanceInCents: ['balance_in_cents', optional(bigint())],
  automaticBalanceInCents: [
    'automatic_balance_in_cents',
    optional(nullable(bigint())),
  ],
  remittanceBalanceInCents: [
    'remittance_balance_in_cents',
    optional(nullable(bigint())),
  ],
});
