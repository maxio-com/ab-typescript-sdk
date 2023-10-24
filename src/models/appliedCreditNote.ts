/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface AppliedCreditNote {
  /** The UID of the credit note */
  uid?: string;
  /** The number of the credit note */
  number?: string;
}

export const appliedCreditNoteSchema: Schema<AppliedCreditNote> = object({
  uid: ['uid', optional(string())],
  number: ['number', optional(string())],
});
