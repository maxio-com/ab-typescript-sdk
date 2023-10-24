/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ProformaInvoiceTaxBreakout {
  taxableAmount?: string;
  taxAmount?: string;
}

export const proformaInvoiceTaxBreakoutSchema: Schema<ProformaInvoiceTaxBreakout> = object(
  {
    taxableAmount: ['taxable_amount', optional(string())],
    taxAmount: ['tax_amount', optional(string())],
  }
);
