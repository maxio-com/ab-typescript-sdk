/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { CreditNote, creditNoteSchema } from './creditNote';

export interface ListCreditNotesResponse {
  creditNotes: CreditNote[];
}

export const listCreditNotesResponseSchema: Schema<ListCreditNotesResponse> = object(
  { creditNotes: ['credit_notes', array(lazy(() => creditNoteSchema))] }
);
