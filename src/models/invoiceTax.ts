/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoiceTaxBreakout,
  invoiceTaxBreakoutSchema,
} from './invoiceTaxBreakout';

export interface InvoiceTax {
  uid?: string;
  title?: string;
  sourceType?: string;
  sourceId?: number;
  percentage?: string;
  taxableAmount?: string;
  taxAmount?: string;
  lineItemBreakouts?: InvoiceTaxBreakout[];
}

export const invoiceTaxSchema: Schema<InvoiceTax> = object({
  uid: ['uid', optional(string())],
  title: ['title', optional(string())],
  sourceType: ['source_type', optional(string())],
  sourceId: ['source_id', optional(number())],
  percentage: ['percentage', optional(string())],
  taxableAmount: ['taxable_amount', optional(string())],
  taxAmount: ['tax_amount', optional(string())],
  lineItemBreakouts: [
    'line_item_breakouts',
    optional(array(lazy(() => invoiceTaxBreakoutSchema))),
  ],
});
