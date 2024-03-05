/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  lazy,
  nullable,
  Schema,
  string,
} from '../schema';
import {
  VoidInvoiceEventDataCreditNoteAttributes,
  voidInvoiceEventDataCreditNoteAttributesSchema,
} from './containers/voidInvoiceEventDataCreditNoteAttributes';

/** Example schema for an `void_invoice` event */
export interface VoidInvoiceEventData {
  creditNoteAttributes: VoidInvoiceEventDataCreditNoteAttributes | null;
  /** The memo provided during invoice voiding. */
  memo: string | null;
  /** The amount of the void. */
  appliedAmount: string | null;
  /** The time the refund was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" */
  transactionTime: string | null;
  /** If true, the invoice is an advance invoice. */
  isAdvanceInvoice: boolean;
  /** The reason for the void. */
  reason: string;
  [key: string]: unknown;
}

export const voidInvoiceEventDataSchema: Schema<VoidInvoiceEventData> = expandoObject(
  {
    creditNoteAttributes: [
      'credit_note_attributes',
      nullable(lazy(() => voidInvoiceEventDataCreditNoteAttributesSchema)),
    ],
    memo: ['memo', nullable(string())],
    appliedAmount: ['applied_amount', nullable(string())],
    transactionTime: ['transaction_time', nullable(string())],
    isAdvanceInvoice: ['is_advance_invoice', boolean()],
    reason: ['reason', string()],
  }
);
