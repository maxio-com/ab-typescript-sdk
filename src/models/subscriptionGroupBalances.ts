/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { AccountBalance, accountBalanceSchema } from './accountBalance';

export interface SubscriptionGroupBalances {
  prepayments?: AccountBalance;
  serviceCredits?: AccountBalance;
  openInvoices?: AccountBalance;
  pendingDiscounts?: AccountBalance;
}

export const subscriptionGroupBalancesSchema: Schema<SubscriptionGroupBalances> = object(
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
