/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Invoice, invoiceSchema } from './invoice';

export interface InvoiceResponse {
  invoice: Invoice;
}

export const invoiceResponseSchema: Schema<InvoiceResponse> = object({
  invoice: ['invoice', lazy(() => invoiceSchema)],
});
