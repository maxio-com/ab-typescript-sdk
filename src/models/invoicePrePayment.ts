/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface InvoicePrePayment {
  /** The subscription id for the prepayment account */
  subscriptionId?: string;
  /** The amount in cents of the prepayment that was created as a result of this payment. */
  amountInCents?: string;
  /** The total balance of the prepayment account for this subscription including any prior prepayments */
  endingBalanceInCents?: string;
}

export const invoicePrePaymentSchema: Schema<InvoicePrePayment> = object({
  subscriptionId: ['subscription_id', optional(string())],
  amountInCents: ['amount_in_cents', optional(string())],
  endingBalanceInCents: ['ending_balance_in_cents', optional(string())],
});
