/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface ProformaInvoicePayment {
  memo?: string;
  originalAmount?: string;
  appliedAmount?: string;
  prepayment?: boolean;
}

export const proformaInvoicePaymentSchema: Schema<ProformaInvoicePayment> = object(
  {
    memo: ['memo', optional(string())],
    originalAmount: ['original_amount', optional(string())],
    appliedAmount: ['applied_amount', optional(string())],
    prepayment: ['prepayment', optional(boolean())],
  }
);
