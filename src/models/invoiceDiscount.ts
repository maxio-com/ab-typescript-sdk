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
  InvoiceDiscountBreakout,
  invoiceDiscountBreakoutSchema,
} from './invoiceDiscountBreakout';

export interface InvoiceDiscount {
  uid?: string;
  title?: string;
  description?: string | null;
  code?: string;
  sourceType?: string;
  sourceId?: number;
  discountType?: string;
  percentage?: string;
  eligibleAmount?: string;
  discountAmount?: string;
  transactionId?: number;
  lineItemBreakouts?: InvoiceDiscountBreakout[];
}

export const invoiceDiscountSchema: Schema<InvoiceDiscount> = object({
  uid: ['uid', optional(string())],
  title: ['title', optional(string())],
  description: ['description', optional(nullable(string()))],
  code: ['code', optional(string())],
  sourceType: ['source_type', optional(string())],
  sourceId: ['source_id', optional(number())],
  discountType: ['discount_type', optional(string())],
  percentage: ['percentage', optional(string())],
  eligibleAmount: ['eligible_amount', optional(string())],
  discountAmount: ['discount_amount', optional(string())],
  transactionId: ['transaction_id', optional(number())],
  lineItemBreakouts: [
    'line_item_breakouts',
    optional(array(lazy(() => invoiceDiscountBreakoutSchema))),
  ],
});
