/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { Invoice, invoiceSchema } from './invoice';

export interface ListInvoicesResponse {
  invoices: Invoice[];
}

export const listInvoicesResponseSchema: Schema<ListInvoicesResponse> = object({
  invoices: ['invoices', array(lazy(() => invoiceSchema))],
});
