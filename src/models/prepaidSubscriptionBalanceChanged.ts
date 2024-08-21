/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, Schema, string } from '../schema';

export interface PrepaidSubscriptionBalanceChanged {
  reason: string;
  currentAccountBalanceInCents: bigint;
  prepaymentAccountBalanceInCents: bigint;
  currentUsageAmountInCents: bigint;
  [key: string]: unknown;
}

export const prepaidSubscriptionBalanceChangedSchema: Schema<PrepaidSubscriptionBalanceChanged> = expandoObject(
  {
    reason: ['reason', string()],
    currentAccountBalanceInCents: [
      'current_account_balance_in_cents',
      bigint(),
    ],
    prepaymentAccountBalanceInCents: [
      'prepayment_account_balance_in_cents',
      bigint(),
    ],
    currentUsageAmountInCents: ['current_usage_amount_in_cents', bigint()],
  }
);
