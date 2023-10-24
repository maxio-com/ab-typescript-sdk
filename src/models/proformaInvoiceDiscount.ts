/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  ProformaInvoiceDiscountBreakout,
  proformaInvoiceDiscountBreakoutSchema,
} from './proformaInvoiceDiscountBreakout';

export interface ProformaInvoiceDiscount {
  title?: string;
  sourceType?: string;
  discountType?: string;
  eligibleAmount?: string;
  discountAmount?: string;
  lineItemBreakouts?: ProformaInvoiceDiscountBreakout[];
}

export const proformaInvoiceDiscountSchema: Schema<ProformaInvoiceDiscount> = object(
  {
    title: ['title', optional(string())],
    sourceType: ['source_type', optional(string())],
    discountType: ['discount_type', optional(string())],
    eligibleAmount: ['eligible_amount', optional(string())],
    discountAmount: ['discount_amount', optional(string())],
    lineItemBreakouts: [
      'line_item_breakouts',
      optional(array(lazy(() => proformaInvoiceDiscountBreakoutSchema))),
    ],
  }
);
