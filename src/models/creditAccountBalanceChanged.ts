/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, Schema, string } from '../schema';

export interface CreditAccountBalanceChanged {
  reason: string;
  serviceCreditAccountBalanceInCents: bigint;
  serviceCreditBalanceChangeInCents: bigint;
  currencyCode: string;
  atTime: string;
  [key: string]: unknown;
}

export const creditAccountBalanceChangedSchema: Schema<CreditAccountBalanceChanged> = expandoObject(
  {
    reason: ['reason', string()],
    serviceCreditAccountBalanceInCents: [
      'service_credit_account_balance_in_cents',
      bigint(),
    ],
    serviceCreditBalanceChangeInCents: [
      'service_credit_balance_change_in_cents',
      bigint(),
    ],
    currencyCode: ['currency_code', string()],
    atTime: ['at_time', string()],
  }
);
