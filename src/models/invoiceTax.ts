/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
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
import {
  InvoiceTaxComponentBreakout,
  invoiceTaxComponentBreakoutSchema,
} from './invoiceTaxComponentBreakout';

export interface InvoiceTax {
  uid?: string;
  title?: string;
  description?: string | null;
  sourceType?: string;
  sourceId?: number;
  percentage?: string;
  taxableAmount?: string;
  taxAmount?: string;
  transactionId?: number;
  lineItemBreakouts?: InvoiceTaxBreakout[];
  taxComponentBreakouts?: InvoiceTaxComponentBreakout[];
}

export const invoiceTaxSchema: Schema<InvoiceTax> = object({
  uid: ['uid', optional(string())],
  title: ['title', optional(string())],
  description: ['description', optional(nullable(string()))],
  sourceType: ['source_type', optional(string())],
  sourceId: ['source_id', optional(number())],
  percentage: ['percentage', optional(string())],
  taxableAmount: ['taxable_amount', optional(string())],
  taxAmount: ['tax_amount', optional(string())],
  transactionId: ['transaction_id', optional(number())],
  lineItemBreakouts: [
    'line_item_breakouts',
    optional(array(lazy(() => invoiceTaxBreakoutSchema))),
  ],
  taxComponentBreakouts: [
    'tax_component_breakouts',
    optional(array(lazy(() => invoiceTaxComponentBreakoutSchema))),
  ],
});
