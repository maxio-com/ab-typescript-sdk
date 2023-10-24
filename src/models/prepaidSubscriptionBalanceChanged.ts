/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface PrepaidSubscriptionBalanceChanged {
  reason: string;
  currentAccountBalanceInCents: number;
  prepaymentAccountBalanceInCents: number;
  currentUsageAmountInCents: number;
}

export const prepaidSubscriptionBalanceChangedSchema: Schema<PrepaidSubscriptionBalanceChanged> = object(
  {
    reason: ['reason', string()],
    currentAccountBalanceInCents: [
      'current_account_balance_in_cents',
      number(),
    ],
    prepaymentAccountBalanceInCents: [
      'prepayment_account_balance_in_cents',
      number(),
    ],
    currentUsageAmountInCents: ['current_usage_amount_in_cents', number()],
  }
);
