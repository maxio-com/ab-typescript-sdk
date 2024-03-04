/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema, string } from '../schema';

export interface ProformaInvoicePayment {
  memo?: string;
  originalAmount?: string;
  appliedAmount?: string;
  prepayment?: boolean;
  [key: string]: unknown;
}

export const proformaInvoicePaymentSchema: Schema<ProformaInvoicePayment> = expandoObject(
  {
    memo: ['memo', optional(string())],
    originalAmount: ['original_amount', optional(string())],
    appliedAmount: ['applied_amount', optional(string())],
    prepayment: ['prepayment', optional(boolean())],
  }
);
