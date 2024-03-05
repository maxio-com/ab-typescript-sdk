/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema } from '../schema';

export interface InvoiceDisplaySettings {
  hideZeroSubtotalLines?: boolean;
  includeDiscountsOnLines?: boolean;
  [key: string]: unknown;
}

export const invoiceDisplaySettingsSchema: Schema<InvoiceDisplaySettings> = expandoObject(
  {
    hideZeroSubtotalLines: ['hide_zero_subtotal_lines', optional(boolean())],
    includeDiscountsOnLines: [
      'include_discounts_on_lines',
      optional(boolean()),
    ],
  }
);
