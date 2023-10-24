/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface CreditAccountBalanceChanged {
  reason: string;
  serviceCreditAccountBalanceInCents: number;
  serviceCreditBalanceChangeInCents: number;
  currencyCode: string;
  atTime: string;
}

export const creditAccountBalanceChangedSchema: Schema<CreditAccountBalanceChanged> = object(
  {
    reason: ['reason', string()],
    serviceCreditAccountBalanceInCents: [
      'service_credit_account_balance_in_cents',
      number(),
    ],
    serviceCreditBalanceChangeInCents: [
      'service_credit_balance_change_in_cents',
      number(),
    ],
    currencyCode: ['currency_code', string()],
    atTime: ['at_time', string()],
  }
);
