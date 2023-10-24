/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface InvoiceCredit {
  uid?: string;
  creditNoteNumber?: string;
  creditNoteUid?: string;
  transactionTime?: string;
  memo?: string;
  originalAmount?: string;
  appliedAmount?: string;
}

export const invoiceCreditSchema: Schema<InvoiceCredit> = object({
  uid: ['uid', optional(string())],
  creditNoteNumber: ['credit_note_number', optional(string())],
  creditNoteUid: ['credit_note_uid', optional(string())],
  transactionTime: ['transaction_time', optional(string())],
  memo: ['memo', optional(string())],
  originalAmount: ['original_amount', optional(string())],
  appliedAmount: ['applied_amount', optional(string())],
});
