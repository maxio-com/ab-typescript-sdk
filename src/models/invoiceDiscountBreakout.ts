/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface InvoiceDiscountBreakout {
  uid?: string;
  eligibleAmount?: string;
  discountAmount?: string;
  [key: string]: unknown;
}

export const invoiceDiscountBreakoutSchema: Schema<InvoiceDiscountBreakout> = expandoObject(
  {
    uid: ['uid', optional(string())],
    eligibleAmount: ['eligible_amount', optional(string())],
    discountAmount: ['discount_amount', optional(string())],
  }
);
