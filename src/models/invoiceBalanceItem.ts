/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface InvoiceBalanceItem {
  uid?: string;
  number?: string;
  outstandingAmount?: string;
  [key: string]: unknown;
}

export const invoiceBalanceItemSchema: Schema<InvoiceBalanceItem> = expandoObject(
  {
    uid: ['uid', optional(string())],
    number: ['number', optional(string())],
    outstandingAmount: ['outstanding_amount', optional(string())],
  }
);
