/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { CreditNote, creditNoteSchema } from './creditNote';

/** Example schema for an `void_invoice` event */
export interface VoidInvoiceEventData1 {
  creditNoteAttributes?: CreditNote;
  /** The memo provided during invoice remainder voiding. */
  memo?: string;
  /** The amount of the void. */
  appliedAmount?: string;
  /** The time the refund was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" */
  transactionTime?: string;
}

export const voidInvoiceEventData1Schema: Schema<VoidInvoiceEventData1> = object(
  {
    creditNoteAttributes: [
      'credit_note_attributes',
      optional(lazy(() => creditNoteSchema)),
    ],
    memo: ['memo', optional(string())],
    appliedAmount: ['applied_amount', optional(string())],
    transactionTime: ['transaction_time', optional(string())],
  }
);
