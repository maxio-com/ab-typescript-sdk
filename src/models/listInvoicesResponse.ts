/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import { Invoice, invoiceSchema } from './invoice.js';

export interface ListInvoicesResponse {
  invoices: Invoice[];
  [key: string]: unknown;
}

export const listInvoicesResponseSchema: Schema<ListInvoicesResponse> = lazy(
  () => expandoObject({ invoices: ['invoices', array(invoiceSchema)] })
);
