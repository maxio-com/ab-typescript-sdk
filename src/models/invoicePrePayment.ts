/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, number, object, optional, Schema } from '../schema';

export interface InvoicePrePayment {
  /** The subscription id for the prepayment account */
  subscriptionId?: number;
  /** The amount in cents of the prepayment that was created as a result of this payment. */
  amountInCents?: bigint;
  /** The total balance of the prepayment account for this subscription including any prior prepayments */
  endingBalanceInCents?: bigint;
}

export const invoicePrePaymentSchema: Schema<InvoicePrePayment> = object({
  subscriptionId: ['subscription_id', optional(number())],
  amountInCents: ['amount_in_cents', optional(bigint())],
  endingBalanceInCents: ['ending_balance_in_cents', optional(bigint())],
});
