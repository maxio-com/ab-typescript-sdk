/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema, string } from '../schema';
import { CreditNote, creditNoteSchema } from './creditNote';

/** Example schema for an `void_remainder` event */
export interface VoidRemainderEventData {
  creditNoteAttributes: CreditNote;
  /** The memo provided during invoice remainder voiding. */
  memo: string;
  /** The amount of the void. */
  appliedAmount: string;
  /** The time the refund was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" */
  transactionTime: string;
  [key: string]: unknown;
}

export const voidRemainderEventDataSchema: Schema<VoidRemainderEventData> = expandoObject(
  {
    creditNoteAttributes: [
      'credit_note_attributes',
      lazy(() => creditNoteSchema),
    ],
    memo: ['memo', string()],
    appliedAmount: ['applied_amount', string()],
    transactionTime: ['transaction_time', string()],
  }
);
