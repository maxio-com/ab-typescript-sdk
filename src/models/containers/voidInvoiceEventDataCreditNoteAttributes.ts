/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import { CreditNote, creditNoteSchema } from '../creditNote';

/** This is a container type for one-of types. */
export type VoidInvoiceEventDataCreditNoteAttributes = CreditNote;

export const voidInvoiceEventDataCreditNoteAttributesSchema: Schema<VoidInvoiceEventDataCreditNoteAttributes> = oneOf(
  [creditNoteSchema]
);

export namespace VoidInvoiceEventDataCreditNoteAttributes {
  /**
  * Validation method to narrow down union type to CreditNote type case.
  *
  * This is Credit Note case.
  */
  export function isCreditNote(value: unknown): value is CreditNote {
    const validationResult = validateAndMap(value, creditNoteSchema);
    return validationResult.errors === false;
  }
}
