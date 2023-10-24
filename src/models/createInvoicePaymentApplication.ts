/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface CreateInvoicePaymentApplication {
  /** Unique identifier for the invoice. It has the prefix "inv_" followed by alphanumeric characters. */
  invoiceUid: string;
  /** Dollar amount of the invoice payment (eg. "10.50" => $10.50). */
  amount: string;
}

export const createInvoicePaymentApplicationSchema: Schema<CreateInvoicePaymentApplication> = object(
  { invoiceUid: ['invoice_uid', string()], amount: ['amount', string()] }
);
