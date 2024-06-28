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
  InvoiceBalanceItem,
  invoiceBalanceItemSchema,
} from './invoiceBalanceItem';

export interface InvoicePreviousBalance {
  capturedAt?: string;
  invoices?: InvoiceBalanceItem[];
  [key: string]: unknown;
}

export const invoicePreviousBalanceSchema: Schema<InvoicePreviousBalance> = expandoObject(
  {
    capturedAt: ['captured_at', optional(string())],
    invoices: [
      'invoices',
      optional(array(lazy(() => invoiceBalanceItemSchema))),
    ],
  }
);
