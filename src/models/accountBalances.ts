/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { AccountBalance, accountBalanceSchema } from './accountBalance.js';

export interface AccountBalances {
  /** The balance, in cents, of the sum of the subscription's  open, payable invoices. */
  openInvoices?: AccountBalance;
  /** The balance, in cents, of the sum of the subscription's  pending, payable invoices. */
  pendingInvoices?: AccountBalance;
  /** The balance, in cents, of the subscription's Pending Discount account. */
  pendingDiscounts?: AccountBalance;
  /** The balance, in cents, of the subscription's Service Credit account. */
  serviceCredits?: AccountBalance;
  /** The balance, in cents, of the subscription's Prepayment account. */
  prepayments?: AccountBalance;
  [key: string]: unknown;
}

export const accountBalancesSchema: Schema<AccountBalances> = lazy(() =>
  expandoObject({
    openInvoices: ['open_invoices', optional(accountBalanceSchema)],
    pendingInvoices: ['pending_invoices', optional(accountBalanceSchema)],
    pendingDiscounts: ['pending_discounts', optional(accountBalanceSchema)],
    serviceCredits: ['service_credits', optional(accountBalanceSchema)],
    prepayments: ['prepayments', optional(accountBalanceSchema)],
  })
);
