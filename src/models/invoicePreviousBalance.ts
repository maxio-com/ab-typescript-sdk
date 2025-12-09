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
} from '../schema.js';
import {
  InvoiceBalanceItem,
  invoiceBalanceItemSchema,
} from './invoiceBalanceItem.js';

export interface InvoicePreviousBalance {
  capturedAt?: string;
  invoices?: InvoiceBalanceItem[];
  [key: string]: unknown;
}

export const invoicePreviousBalanceSchema: Schema<InvoicePreviousBalance> = lazy(
  () =>
    expandoObject({
      capturedAt: ['captured_at', optional(string())],
      invoices: ['invoices', optional(array(invoiceBalanceItemSchema))],
    })
);
