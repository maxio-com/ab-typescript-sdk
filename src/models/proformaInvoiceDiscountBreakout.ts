/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ProformaInvoiceDiscountBreakout {
  eligibleAmount?: string;
  discountAmount?: string;
}

export const proformaInvoiceDiscountBreakoutSchema: Schema<ProformaInvoiceDiscountBreakout> = object(
  {
    eligibleAmount: ['eligible_amount', optional(string())],
    discountAmount: ['discount_amount', optional(string())],
  }
);
