/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface ProformaInvoiceCredit {
  uid?: string;
  memo?: string;
  originalAmount?: string;
  appliedAmount?: string;
  [key: string]: unknown;
}

export const proformaInvoiceCreditSchema: Schema<ProformaInvoiceCredit> = expandoObject(
  {
    uid: ['uid', optional(string())],
    memo: ['memo', optional(string())],
    originalAmount: ['original_amount', optional(string())],
    appliedAmount: ['applied_amount', optional(string())],
  }
);
