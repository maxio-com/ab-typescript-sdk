/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { CreditNote, creditNoteSchema } from './creditNote';

/** Example schema for an `void_invoice` event */
export interface VoidInvoiceEventData {
  creditNoteAttributes?: CreditNote;
  /** The memo provided during invoice voiding. */
  memo?: string;
  /** The amount of the void. */
  appliedAmount?: string;
  /** The time the refund was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" */
  transactionTime?: string;
  /** If true, the invoice is an advance invoice. */
  isAdvanceInvoice?: boolean;
}

export const voidInvoiceEventDataSchema: Schema<VoidInvoiceEventData> = object({
  creditNoteAttributes: [
    'credit_note_attributes',
    optional(lazy(() => creditNoteSchema)),
  ],
  memo: ['memo', optional(string())],
  appliedAmount: ['applied_amount', optional(string())],
  transactionTime: ['transaction_time', optional(string())],
  isAdvanceInvoice: ['is_advance_invoice', optional(boolean())],
});
