/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoiceTaxBreakout,
  invoiceTaxBreakoutSchema,
} from './invoiceTaxBreakout';
import {
  ProformaInvoiceTaxSourceType,
  proformaInvoiceTaxSourceTypeSchema,
} from './proformaInvoiceTaxSourceType';

export interface ProformaInvoiceTax {
  uid?: string;
  title?: string;
  sourceType?: ProformaInvoiceTaxSourceType;
  percentage?: string;
  taxableAmount?: string;
  taxAmount?: string;
  lineItemBreakouts?: InvoiceTaxBreakout[];
  [key: string]: unknown;
}

export const proformaInvoiceTaxSchema: Schema<ProformaInvoiceTax> = expandoObject(
  {
    uid: ['uid', optional(string())],
    title: ['title', optional(string())],
    sourceType: ['source_type', optional(proformaInvoiceTaxSourceTypeSchema)],
    percentage: ['percentage', optional(string())],
    taxableAmount: ['taxable_amount', optional(string())],
    taxAmount: ['tax_amount', optional(string())],
    lineItemBreakouts: [
      'line_item_breakouts',
      optional(array(lazy(() => invoiceTaxBreakoutSchema))),
    ],
  }
);
