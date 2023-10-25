/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface InvoiceDisplaySettings {
  hideZeroSubtotalLines?: boolean;
  includeDiscountsOnLines?: boolean;
}

export const invoiceDisplaySettingsSchema: Schema<InvoiceDisplaySettings> = object(
  {
    hideZeroSubtotalLines: ['hide_zero_subtotal_lines', optional(boolean())],
    includeDiscountsOnLines: [
      'include_discounts_on_lines',
      optional(boolean()),
    ],
  }
);
