/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  ListProformaInvoicesMeta,
  listProformaInvoicesMetaSchema,
} from './listProformaInvoicesMeta';
import { ProformaInvoice, proformaInvoiceSchema } from './proformaInvoice';

export interface ListProformaInvoicesResponse {
  proformaInvoices?: ProformaInvoice[];
  meta?: ListProformaInvoicesMeta;
}

export const listProformaInvoicesResponseSchema: Schema<ListProformaInvoicesResponse> = object(
  {
    proformaInvoices: [
      'proforma_invoices',
      optional(array(lazy(() => proformaInvoiceSchema))),
    ],
    meta: ['meta', optional(lazy(() => listProformaInvoicesMetaSchema))],
  }
);
