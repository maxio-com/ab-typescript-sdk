/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { CreditNote, creditNoteSchema } from './creditNote';
import {
  InvoiceConsolidationLevel,
  invoiceConsolidationLevelSchema,
} from './invoiceConsolidationLevel';

/** Example schema for an `refund_invoice` event */
export interface RefundInvoiceEventData {
  /** If true, credit was created and applied it to the invoice. */
  applyCredit: boolean;
  /**
   * Consolidation level of the invoice, which is applicable to invoice consolidation.  It will hold one of the following values:
   * * "none": A normal invoice with no consolidation.
   * * "child": An invoice segment which has been combined into a consolidated invoice.
   * * "parent": A consolidated invoice, whose contents are composed of invoice segments.
   * "Parent" invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments.
   * See also the [invoice consolidation documentation](https://maxio.zendesk.com/hc/en-us/articles/24252269909389-Invoice-Consolidation).
   */
  consolidationLevel?: InvoiceConsolidationLevel;
  creditNoteAttributes: CreditNote;
  /** The refund memo. */
  memo?: string;
  /** The full, original amount of the refund. */
  originalAmount?: string;
  /** The ID of the payment transaction to be refunded. */
  paymentId: number;
  /** The amount of the refund. */
  refundAmount: string;
  /** The ID of the refund transaction. */
  refundId: number;
  /** The time the refund was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" */
  transactionTime: string;
  [key: string]: unknown;
}

export const refundInvoiceEventDataSchema: Schema<RefundInvoiceEventData> = expandoObject(
  {
    applyCredit: ['apply_credit', boolean()],
    consolidationLevel: [
      'consolidation_level',
      optional(invoiceConsolidationLevelSchema),
    ],
    creditNoteAttributes: [
      'credit_note_attributes',
      lazy(() => creditNoteSchema),
    ],
    memo: ['memo', optional(string())],
    originalAmount: ['original_amount', optional(string())],
    paymentId: ['payment_id', number()],
    refundAmount: ['refund_amount', string()],
    refundId: ['refund_id', number()],
    transactionTime: ['transaction_time', string()],
  }
);
