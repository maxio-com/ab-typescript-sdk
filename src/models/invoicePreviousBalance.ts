/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  InvoiceBalanceItem,
  invoiceBalanceItemSchema,
} from './invoiceBalanceItem';

export interface InvoicePreviousBalance {
  captureDate?: string;
  invoices?: InvoiceBalanceItem[];
}

export const invoicePreviousBalanceSchema: Schema<InvoicePreviousBalance> = object(
  {
    captureDate: ['capture_date', optional(string())],
    invoices: [
      'invoices',
      optional(array(lazy(() => invoiceBalanceItemSchema))),
    ],
  }
);
