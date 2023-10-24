/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

/** Refund an invoice or a segment of a consolidated invoice. */
export interface RefundInvoice {
  /** The amount to be refunded in decimal format as a string. Example: "10.50". Must not exceed the remaining refundable balance of the payment. */
  amount: string;
  /** A description that will be attached to the refund */
  memo: string;
  /** The ID of the payment to be refunded */
  paymentId: number;
  /** Flag that marks refund as external (no money is returned to the customer). Defaults to `false`. */
  external?: boolean;
  /** If set to true, creates credit and applies it to an invoice. Defaults to `false`. */
  applyCredit?: boolean;
  /** If `apply_credit` set to false and refunding full amount, if `void_invoice` set to true, invoice will be voided after refund. Defaults to `false`. */
  voidInvoice?: boolean;
}

export const refundInvoiceSchema: Schema<RefundInvoice> = object({
  amount: ['amount', string()],
  memo: ['memo', string()],
  paymentId: ['payment_id', number()],
  external: ['external', optional(boolean())],
  applyCredit: ['apply_credit', optional(boolean())],
  voidInvoice: ['void_invoice', optional(boolean())],
});
