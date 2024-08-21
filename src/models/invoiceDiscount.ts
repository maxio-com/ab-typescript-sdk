/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoiceDiscountBreakout,
  invoiceDiscountBreakoutSchema,
} from './invoiceDiscountBreakout';
import {
  InvoiceDiscountSourceType,
  invoiceDiscountSourceTypeSchema,
} from './invoiceDiscountSourceType';
import {
  InvoiceDiscountType,
  invoiceDiscountTypeSchema,
} from './invoiceDiscountType';

export interface InvoiceDiscount {
  uid?: string;
  title?: string;
  description?: string | null;
  code?: string;
  sourceType?: InvoiceDiscountSourceType;
  sourceId?: number;
  discountType?: InvoiceDiscountType;
  percentage?: string;
  eligibleAmount?: string;
  discountAmount?: string;
  transactionId?: number;
  lineItemBreakouts?: InvoiceDiscountBreakout[];
  [key: string]: unknown;
}

export const invoiceDiscountSchema: Schema<InvoiceDiscount> = expandoObject({
  uid: ['uid', optional(string())],
  title: ['title', optional(string())],
  description: ['description', optional(nullable(string()))],
  code: ['code', optional(string())],
  sourceType: ['source_type', optional(invoiceDiscountSourceTypeSchema)],
  sourceId: ['source_id', optional(number())],
  discountType: ['discount_type', optional(invoiceDiscountTypeSchema)],
  percentage: ['percentage', optional(string())],
  eligibleAmount: ['eligible_amount', optional(string())],
  discountAmount: ['discount_amount', optional(string())],
  transactionId: ['transaction_id', optional(number())],
  lineItemBreakouts: [
    'line_item_breakouts',
    optional(array(lazy(() => invoiceDiscountBreakoutSchema))),
  ],
});
