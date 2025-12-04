/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  InvoiceTaxBreakout,
  invoiceTaxBreakoutSchema,
} from './invoiceTaxBreakout.js';
import {
  InvoiceTaxComponentBreakout,
  invoiceTaxComponentBreakoutSchema,
} from './invoiceTaxComponentBreakout.js';
import {
  ProformaInvoiceTaxSourceType,
  proformaInvoiceTaxSourceTypeSchema,
} from './proformaInvoiceTaxSourceType.js';

export interface InvoiceTax {
  uid?: string;
  title?: string;
  description?: string | null;
  sourceType?: ProformaInvoiceTaxSourceType;
  sourceId?: number;
  percentage?: string;
  taxableAmount?: string;
  taxAmount?: string;
  transactionId?: number;
  lineItemBreakouts?: InvoiceTaxBreakout[];
  taxComponentBreakouts?: InvoiceTaxComponentBreakout[];
  euVat?: boolean;
  type?: string;
  taxExemptAmount?: string;
  [key: string]: unknown;
}

export const invoiceTaxSchema: Schema<InvoiceTax> = lazy(() =>
  expandoObject({
    uid: ['uid', optional(string())],
    title: ['title', optional(string())],
    description: ['description', optional(nullable(string()))],
    sourceType: ['source_type', optional(proformaInvoiceTaxSourceTypeSchema)],
    sourceId: ['source_id', optional(number())],
    percentage: ['percentage', optional(string())],
    taxableAmount: ['taxable_amount', optional(string())],
    taxAmount: ['tax_amount', optional(string())],
    transactionId: ['transaction_id', optional(number())],
    lineItemBreakouts: [
      'line_item_breakouts',
      optional(array(invoiceTaxBreakoutSchema)),
    ],
    taxComponentBreakouts: [
      'tax_component_breakouts',
      optional(array(invoiceTaxComponentBreakoutSchema)),
    ],
    euVat: ['eu_vat', optional(boolean())],
    type: ['type', optional(string())],
    taxExemptAmount: ['tax_exempt_amount', optional(string())],
  })
);
