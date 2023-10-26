/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';
import {
  RefundConsolidatedInvoiceSegmentUids,
  refundConsolidatedInvoiceSegmentUidsSchema,
} from './containers/refundConsolidatedInvoiceSegmentUids';

/** Refund consolidated invoice */
export interface RefundConsolidatedInvoice {
  /** A description for the refund */
  memo: string;
  /** The ID of the payment to be refunded */
  paymentId: number;
  /** An array of segment uids to refund or the string 'all' to indicate that all segments should be refunded */
  segmentUids: RefundConsolidatedInvoiceSegmentUids;
  /** Flag that marks refund as external (no money is returned to the customer). Defaults to `false`. */
  external?: boolean;
  /** If set to true, creates credit and applies it to an invoice. Defaults to `false`. */
  applyCredit?: boolean;
  /** The amount of payment to be refunded in decimal format. Example: "10.50". This will default to the full amount of the payment if not provided. */
  amount?: string;
}

export const refundConsolidatedInvoiceSchema: Schema<RefundConsolidatedInvoice> = object(
  {
    memo: ['memo', string()],
    paymentId: ['payment_id', number()],
    segmentUids: ['segment_uids', refundConsolidatedInvoiceSegmentUidsSchema],
    external: ['external', optional(boolean())],
    applyCredit: ['apply_credit', optional(boolean())],
    amount: ['amount', optional(string())],
  }
);
