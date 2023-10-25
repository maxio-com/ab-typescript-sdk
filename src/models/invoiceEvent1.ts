/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { AppliedCreditNote, appliedCreditNoteSchema } from './appliedCreditNote';
import {
  InvoiceEvent1PaymentMethod,
  invoiceEvent1PaymentMethodSchema,
} from './containers/invoiceEvent1PaymentMethod';
import { CreditNote1, creditNote1Schema } from './creditNote1';
import {
  InvoiceConsolidationLevel,
  invoiceConsolidationLevelSchema,
} from './invoiceConsolidationLevel';
import { Status, statusSchema } from './status';

/** The event data is the data that, when combined with the command, results in the output invoice found in the invoice field. */
export interface InvoiceEvent1 {
  /** Unique identifier for the credit note application. It is generated automatically by Chargify and has the prefix "cdt_" followed by alphanumeric characters. */
  uid?: string;
  /** A unique, identifying string that appears on the credit note and in places it is referenced. */
  creditNoteNumber?: string;
  /** Unique identifier for the credit note. It is generated automatically by Chargify and has the prefix "cn_" followed by alphanumeric characters. */
  creditNoteUid?: string;
  /** The full, original amount of the credit note. */
  originalAmount?: string;
  /** The amount of the credit note applied to invoice. */
  appliedAmount?: string;
  /** The time the credit note was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" */
  transactionTime?: string;
  /** The credit note memo. */
  memo?: string;
  /** The role of the credit note (e.g. 'general') */
  role?: string;
  /** Shows whether it was applied to consolidated invoice or not */
  consolidatedInvoice?: boolean;
  /** List of credit notes applied to children invoices (if consolidated invoice) */
  appliedCreditNotes?: AppliedCreditNote[];
  /** A unique, identifying string that appears on the debit note and in places it is referenced. */
  debitNoteNumber?: string;
  /** Unique identifier for the debit note. It is generated automatically by Chargify and has the prefix "db_" followed by alphanumeric characters. */
  debitNoteUid?: string;
  /** A nested data structure detailing the method of payment */
  paymentMethod?: InvoiceEvent1PaymentMethod;
  /** The Chargify id of the original payment */
  transactionId?: number;
  /** The previous collection method of the invoice. */
  fromCollectionMethod?: string;
  /** The new collection method of the invoice. */
  toCollectionMethod?: string;
  /**
   * Consolidation level of the invoice, which is applicable to invoice consolidation.  It will hold one of the following values:
   * * "none": A normal invoice with no consolidation.
   * * "child": An invoice segment which has been combined into a consolidated invoice.
   * * "parent": A consolidated invoice, whose contents are composed of invoice segments.
   * "Parent" invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments.
   * See also the [invoice consolidation documentation](https://chargify.zendesk.com/hc/en-us/articles/4407746391835).
   */
  consolidationLevel?: InvoiceConsolidationLevel;
  /** The status of the invoice before event occurence. See [Invoice Statuses](https://chargify.zendesk.com/hc/en-us/articles/4407737494171#line-item-breakdowns) for more. */
  fromStatus?: Status;
  /** The status of the invoice after event occurence. See [Invoice Statuses](https://chargify.zendesk.com/hc/en-us/articles/4407737494171#line-item-breakdowns) for more. */
  toStatus?: Status;
  /** Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. */
  dueAmount?: string;
  /** The invoice total, which is `subtotal_amount - discount_amount + tax_amount`.' */
  totalAmount?: string;
  /** If true, credit was created and applied it to the invoice. */
  applyCredit?: boolean;
  creditNoteAttributes?: CreditNote1;
  /** The ID of the payment transaction to be refunded. */
  paymentId?: number;
  /** The amount of the refund. */
  refundAmount?: string;
  /** The ID of the refund transaction. */
  refundId?: number;
  /** The flag that shows whether the original payment was a prepayment or not */
  prepayment?: boolean;
  /** If true, the invoice is an advance invoice. */
  isAdvanceInvoice?: boolean;
}

export const invoiceEvent1Schema: Schema<InvoiceEvent1> = object({
  uid: ['uid', optional(string())],
  creditNoteNumber: ['credit_note_number', optional(string())],
  creditNoteUid: ['credit_note_uid', optional(string())],
  originalAmount: ['original_amount', optional(string())],
  appliedAmount: ['applied_amount', optional(string())],
  transactionTime: ['transaction_time', optional(string())],
  memo: ['memo', optional(string())],
  role: ['role', optional(string())],
  consolidatedInvoice: ['consolidated_invoice', optional(boolean())],
  appliedCreditNotes: [
    'applied_credit_notes',
    optional(array(lazy(() => appliedCreditNoteSchema))),
  ],
  debitNoteNumber: ['debit_note_number', optional(string())],
  debitNoteUid: ['debit_note_uid', optional(string())],
  paymentMethod: [
    'payment_method',
    optional(lazy(() => invoiceEvent1PaymentMethodSchema)),
  ],
  transactionId: ['transaction_id', optional(number())],
  fromCollectionMethod: ['from_collection_method', optional(string())],
  toCollectionMethod: ['to_collection_method', optional(string())],
  consolidationLevel: [
    'consolidation_level',
    optional(invoiceConsolidationLevelSchema),
  ],
  fromStatus: ['from_status', optional(statusSchema)],
  toStatus: ['to_status', optional(statusSchema)],
  dueAmount: ['due_amount', optional(string())],
  totalAmount: ['total_amount', optional(string())],
  applyCredit: ['apply_credit', optional(boolean())],
  creditNoteAttributes: [
    'credit_note_attributes',
    optional(lazy(() => creditNote1Schema)),
  ],
  paymentId: ['payment_id', optional(number())],
  refundAmount: ['refund_amount', optional(string())],
  refundId: ['refund_id', optional(number())],
  prepayment: ['prepayment', optional(boolean())],
  isAdvanceInvoice: ['is_advance_invoice', optional(boolean())],
});
