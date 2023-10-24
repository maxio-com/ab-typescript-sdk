/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface InvoiceTaxBreakout {
  uid?: string;
  taxableAmount?: string;
  taxAmount?: string;
}

export const invoiceTaxBreakoutSchema: Schema<InvoiceTaxBreakout> = object({
  uid: ['uid', optional(string())],
  taxableAmount: ['taxable_amount', optional(string())],
  taxAmount: ['tax_amount', optional(string())],
});
