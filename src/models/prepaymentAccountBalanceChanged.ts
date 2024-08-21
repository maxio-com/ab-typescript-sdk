/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, Schema, string } from '../schema';

export interface PrepaymentAccountBalanceChanged {
  reason: string;
  prepaymentAccountBalanceInCents: bigint;
  prepaymentBalanceChangeInCents: bigint;
  currencyCode: string;
  [key: string]: unknown;
}

export const prepaymentAccountBalanceChangedSchema: Schema<PrepaymentAccountBalanceChanged> = expandoObject(
  {
    reason: ['reason', string()],
    prepaymentAccountBalanceInCents: [
      'prepayment_account_balance_in_cents',
      bigint(),
    ],
    prepaymentBalanceChangeInCents: [
      'prepayment_balance_change_in_cents',
      bigint(),
    ],
    currencyCode: ['currency_code', string()],
  }
);
