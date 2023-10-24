/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface InvoiceDiscountBreakout {
  uid?: string;
  eligibleAmount?: string;
  discountAmount?: string;
}

export const invoiceDiscountBreakoutSchema: Schema<InvoiceDiscountBreakout> = object(
  {
    uid: ['uid', optional(string())],
    eligibleAmount: ['eligible_amount', optional(string())],
    discountAmount: ['discount_amount', optional(string())],
  }
);
