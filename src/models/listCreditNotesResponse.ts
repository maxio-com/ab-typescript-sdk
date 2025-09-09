/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import { CreditNote, creditNoteSchema } from './creditNote.js';

export interface ListCreditNotesResponse {
  creditNotes: CreditNote[];
  [key: string]: unknown;
}

export const listCreditNotesResponseSchema: Schema<ListCreditNotesResponse> = expandoObject(
  { creditNotes: ['credit_notes', array(lazy(() => creditNoteSchema))] }
);
