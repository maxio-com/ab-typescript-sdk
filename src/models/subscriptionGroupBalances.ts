/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { AccountBalance, accountBalanceSchema } from './accountBalance';

export interface SubscriptionGroupBalances {
  prepayments?: AccountBalance;
  serviceCredits?: AccountBalance;
  openInvoices?: AccountBalance;
  pendingDiscounts?: AccountBalance;
  [key: string]: unknown;
}

export const subscriptionGroupBalancesSchema: Schema<SubscriptionGroupBalances> = expandoObject(
  {
    prepayments: ['prepayments', optional(lazy(() => accountBalanceSchema))],
    serviceCredits: [
      'service_credits',
      optional(lazy(() => accountBalanceSchema)),
    ],
    openInvoices: ['open_invoices', optional(lazy(() => accountBalanceSchema))],
    pendingDiscounts: [
      'pending_discounts',
      optional(lazy(() => accountBalanceSchema)),
    ],
  }
);
