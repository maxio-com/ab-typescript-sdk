/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface PrepaymentAccountBalanceChanged {
  reason: string;
  prepaymentAccountBalanceInCents: number;
  prepaymentBalanceChangeInCents: number;
  currencyCode: string;
}

export const prepaymentAccountBalanceChangedSchema: Schema<PrepaymentAccountBalanceChanged> = object(
  {
    reason: ['reason', string()],
    prepaymentAccountBalanceInCents: [
      'prepayment_account_balance_in_cents',
      number(),
    ],
    prepaymentBalanceChangeInCents: [
      'prepayment_balance_change_in_cents',
      number(),
    ],
    currencyCode: ['currency_code', string()],
  }
);
