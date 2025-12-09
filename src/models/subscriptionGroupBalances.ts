/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { AccountBalance, accountBalanceSchema } from './accountBalance.js';

export interface SubscriptionGroupBalances {
  prepayments?: AccountBalance;
  serviceCredits?: AccountBalance;
  openInvoices?: AccountBalance;
  pendingDiscounts?: AccountBalance;
  [key: string]: unknown;
}

export const subscriptionGroupBalancesSchema: Schema<SubscriptionGroupBalances> = lazy(
  () =>
    expandoObject({
      prepayments: ['prepayments', optional(accountBalanceSchema)],
      serviceCredits: ['service_credits', optional(accountBalanceSchema)],
      openInvoices: ['open_invoices', optional(accountBalanceSchema)],
      pendingDiscounts: ['pending_discounts', optional(accountBalanceSchema)],
    })
);
