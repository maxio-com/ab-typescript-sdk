/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import { DebitNoteRole, debitNoteRoleSchema } from './debitNoteRole';

export interface InvoiceDebit {
  uid?: string;
  debitNoteNumber?: string;
  debitNoteUid?: string;
  /** The role of the debit note. */
  role?: DebitNoteRole;
  transactionTime?: string;
  memo?: string;
  originalAmount?: string;
  appliedAmount?: string;
  [key: string]: unknown;
}

export const invoiceDebitSchema: Schema<InvoiceDebit> = expandoObject({
  uid: ['uid', optional(string())],
  debitNoteNumber: ['debit_note_number', optional(string())],
  debitNoteUid: ['debit_note_uid', optional(string())],
  role: ['role', optional(debitNoteRoleSchema)],
  transactionTime: ['transaction_time', optional(string())],
  memo: ['memo', optional(string())],
  originalAmount: ['original_amount', optional(string())],
  appliedAmount: ['applied_amount', optional(string())],
});
