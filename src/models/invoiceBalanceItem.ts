/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface InvoiceBalanceItem {
  uid?: string;
  number?: string;
  outstandingAmount?: string;
}

export const invoiceBalanceItemSchema: Schema<InvoiceBalanceItem> = object({
  uid: ['uid', optional(string())],
  number: ['number', optional(string())],
  outstandingAmount: ['outstanding_amount', optional(string())],
});
