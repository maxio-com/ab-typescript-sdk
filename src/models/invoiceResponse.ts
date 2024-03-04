/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { Invoice, invoiceSchema } from './invoice';

export interface InvoiceResponse {
  invoice: Invoice;
  [key: string]: unknown;
}

export const invoiceResponseSchema: Schema<InvoiceResponse> = expandoObject({
  invoice: ['invoice', lazy(() => invoiceSchema)],
});
