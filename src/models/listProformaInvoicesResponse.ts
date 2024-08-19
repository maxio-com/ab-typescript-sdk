/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import {
  ListProformaInvoicesMeta,
  listProformaInvoicesMetaSchema,
} from './listProformaInvoicesMeta';
import { ProformaInvoice, proformaInvoiceSchema } from './proformaInvoice';

export interface ListProformaInvoicesResponse {
  proformaInvoices?: ProformaInvoice[];
  meta?: ListProformaInvoicesMeta;
  [key: string]: unknown;
}

export const listProformaInvoicesResponseSchema: Schema<ListProformaInvoicesResponse> = expandoObject(
  {
    proformaInvoices: [
      'proforma_invoices',
      optional(array(lazy(() => proformaInvoiceSchema))),
    ],
    meta: ['meta', optional(lazy(() => listProformaInvoicesMetaSchema))],
  }
);
