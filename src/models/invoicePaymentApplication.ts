/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface InvoicePaymentApplication {
  /** Unique identifier for the paid invoice. It has the prefix "inv_" followed by alphanumeric characters. */
  invoiceUid?: string;
  /** Unique identifier for the payment. It has the prefix "pmt_" followed by alphanumeric characters. */
  applicationUid?: string;
  /** Dollar amount of the paid invoice. */
  appliedAmount?: string;
}

export const invoicePaymentApplicationSchema: Schema<InvoicePaymentApplication> = object(
  {
    invoiceUid: ['invoice_uid', optional(string())],
    applicationUid: ['application_uid', optional(string())],
    appliedAmount: ['applied_amount', optional(string())],
  }
);
