/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import { Invoice, invoiceSchema } from './invoice';

export interface ListInvoicesResponse {
  invoices: Invoice[];
  [key: string]: unknown;
}

export const listInvoicesResponseSchema: Schema<ListInvoicesResponse> = expandoObject(
  { invoices: ['invoices', array(lazy(() => invoiceSchema))] }
);
