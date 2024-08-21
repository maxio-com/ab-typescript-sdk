/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface InvoiceTaxBreakout {
  uid?: string;
  taxableAmount?: string;
  taxAmount?: string;
  taxExemptAmount?: string;
  [key: string]: unknown;
}

export const invoiceTaxBreakoutSchema: Schema<InvoiceTaxBreakout> = expandoObject(
  {
    uid: ['uid', optional(string())],
    taxableAmount: ['taxable_amount', optional(string())],
    taxAmount: ['tax_amount', optional(string())],
    taxExemptAmount: ['tax_exempt_amount', optional(string())],
  }
);
