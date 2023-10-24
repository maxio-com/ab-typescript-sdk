/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface CreditNoteApplication {
  uid?: string;
  transactionTime?: string;
  invoiceUid?: string;
  memo?: string;
  appliedAmount?: string;
}

export const creditNoteApplicationSchema: Schema<CreditNoteApplication> = object(
  {
    uid: ['uid', optional(string())],
    transactionTime: ['transaction_time', optional(string())],
    invoiceUid: ['invoice_uid', optional(string())],
    memo: ['memo', optional(string())],
    appliedAmount: ['applied_amount', optional(string())],
  }
);
