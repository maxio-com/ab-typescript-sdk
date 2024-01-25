/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface AppliedCreditNoteData {
  /** The UID of the credit note */
  uid?: string;
  /** The number of the credit note */
  number?: string;
}

export const appliedCreditNoteDataSchema: Schema<AppliedCreditNoteData> = object(
  { uid: ['uid', optional(string())], number: ['number', optional(string())] }
);
