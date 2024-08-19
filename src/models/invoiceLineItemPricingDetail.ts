/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface InvoiceLineItemPricingDetail {
  label?: string;
  amount?: string;
  [key: string]: unknown;
}

export const invoiceLineItemPricingDetailSchema: Schema<InvoiceLineItemPricingDetail> = expandoObject(
  {
    label: ['label', optional(string())],
    amount: ['amount', optional(string())],
  }
);
