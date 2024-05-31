/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AppliedCreditNoteData,
  appliedCreditNoteDataSchema,
} from './appliedCreditNoteData';

/** Example schema for an `apply_credit_note` event */
export interface ApplyCreditNoteEventData {
  /** Unique identifier for the credit note application. It is generated automatically by Chargify and has the prefix "cdt_" followed by alphanumeric characters. */
  uid: string;
  /** A unique, identifying string that appears on the credit note and in places it is referenced. */
  creditNoteNumber: string;
  /** Unique identifier for the credit note. It is generated automatically by Chargify and has the prefix "cn_" followed by alphanumeric characters. */
  creditNoteUid: string;
  /** The full, original amount of the credit note. */
  originalAmount: string;
  /** The amount of the credit note applied to invoice. */
  appliedAmount: string;
  /** The time the credit note was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" */
  transactionTime?: string;
  /** The credit note memo. */
  memo?: string | null;
  /** The role of the credit note (e.g. 'general') */
  role?: string;
  /** Shows whether it was applied to consolidated invoice or not */
  consolidatedInvoice?: boolean;
  /** List of credit notes applied to children invoices (if consolidated invoice) */
  appliedCreditNotes?: AppliedCreditNoteData[];
  [key: string]: unknown;
}

export const applyCreditNoteEventDataSchema: Schema<ApplyCreditNoteEventData> = expandoObject(
  {
    uid: ['uid', string()],
    creditNoteNumber: ['credit_note_number', string()],
    creditNoteUid: ['credit_note_uid', string()],
    originalAmount: ['original_amount', string()],
    appliedAmount: ['applied_amount', string()],
    transactionTime: ['transaction_time', optional(string())],
    memo: ['memo', optional(nullable(string()))],
    role: ['role', optional(string())],
    consolidatedInvoice: ['consolidated_invoice', optional(boolean())],
    appliedCreditNotes: [
      'applied_credit_notes',
      optional(array(lazy(() => appliedCreditNoteDataSchema))),
    ],
  }
);
