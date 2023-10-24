/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface InvoiceLineItemPricingDetail {
  label?: string;
  amount?: string;
}

export const invoiceLineItemPricingDetailSchema: Schema<InvoiceLineItemPricingDetail> = object(
  {
    label: ['label', optional(string())],
    amount: ['amount', optional(string())],
  }
);
