/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ProformaInvoiceCredit {
  uid?: string;
  memo?: string;
  originalAmount?: string;
  appliedAmount?: string;
}

export const proformaInvoiceCreditSchema: Schema<ProformaInvoiceCredit> = object(
  {
    uid: ['uid', optional(string())],
    memo: ['memo', optional(string())],
    originalAmount: ['original_amount', optional(string())],
    appliedAmount: ['applied_amount', optional(string())],
  }
);
