/**
 * Maxio Advanced BillingLib
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
  InvoiceDiscountBreakout,
  invoiceDiscountBreakoutSchema,
} from './invoiceDiscountBreakout';
import {
  InvoiceDiscountType,
  invoiceDiscountTypeSchema,
} from './invoiceDiscountType';
import {
  ProformaInvoiceDiscountSourceType,
  proformaInvoiceDiscountSourceTypeSchema,
} from './proformaInvoiceDiscountSourceType';

export interface ProformaInvoiceDiscount {
  uid?: string;
  title?: string;
  code?: string;
  sourceType?: ProformaInvoiceDiscountSourceType;
  discountType?: InvoiceDiscountType;
  eligibleAmount?: string;
  discountAmount?: string;
  lineItemBreakouts?: InvoiceDiscountBreakout[];
  [key: string]: unknown;
}

export const proformaInvoiceDiscountSchema: Schema<ProformaInvoiceDiscount> = expandoObject(
  {
    uid: ['uid', optional(string())],
    title: ['title', optional(string())],
    code: ['code', optional(string())],
    sourceType: [
      'source_type',
      optional(proformaInvoiceDiscountSourceTypeSchema),
    ],
    discountType: ['discount_type', optional(invoiceDiscountTypeSchema)],
    eligibleAmount: ['eligible_amount', optional(string())],
    discountAmount: ['discount_amount', optional(string())],
    lineItemBreakouts: [
      'line_item_breakouts',
      optional(array(lazy(() => invoiceDiscountBreakoutSchema))),
    ],
  }
);
