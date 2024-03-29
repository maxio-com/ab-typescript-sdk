/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

/** Example schema for an `apply_debit_note` event */
export interface ApplyDebitNoteEventData {
  /** A unique, identifying string that appears on the debit note and in places it is referenced. */
  debitNoteNumber: string;
  /** Unique identifier for the debit note. It is generated automatically by Chargify and has the prefix "db_" followed by alphanumeric characters. */
  debitNoteUid: string;
  /** The full, original amount of the debit note. */
  originalAmount: string;
  /** The amount of the debit note applied to invoice. */
  appliedAmount: string;
  [key: string]: unknown;
}

export const applyDebitNoteEventDataSchema: Schema<ApplyDebitNoteEventData> = expandoObject(
  {
    debitNoteNumber: ['debit_note_number', string()],
    debitNoteUid: ['debit_note_uid', string()],
    originalAmount: ['original_amount', string()],
    appliedAmount: ['applied_amount', string()],
  }
);
