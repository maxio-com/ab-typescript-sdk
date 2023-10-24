/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  ProformaInvoiceTaxBreakout,
  proformaInvoiceTaxBreakoutSchema,
} from './proformaInvoiceTaxBreakout';

export interface ProformaInvoiceTax {
  uid?: string;
  title?: string;
  sourceType?: string;
  percentage?: string;
  taxableAmount?: string;
  taxAmount?: string;
  lineItemBreakouts?: ProformaInvoiceTaxBreakout[];
}

export const proformaInvoiceTaxSchema: Schema<ProformaInvoiceTax> = object({
  uid: ['uid', optional(string())],
  title: ['title', optional(string())],
  sourceType: ['source_type', optional(string())],
  percentage: ['percentage', optional(string())],
  taxableAmount: ['taxable_amount', optional(string())],
  taxAmount: ['tax_amount', optional(string())],
  lineItemBreakouts: [
    'line_item_breakouts',
    optional(array(lazy(() => proformaInvoiceTaxBreakoutSchema))),
  ],
});
