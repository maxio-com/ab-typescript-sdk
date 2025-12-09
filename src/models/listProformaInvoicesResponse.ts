/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  ListProformaInvoicesMeta,
  listProformaInvoicesMetaSchema,
} from './listProformaInvoicesMeta.js';
import { ProformaInvoice, proformaInvoiceSchema } from './proformaInvoice.js';

export interface ListProformaInvoicesResponse {
  proformaInvoices?: ProformaInvoice[];
  meta?: ListProformaInvoicesMeta;
  [key: string]: unknown;
}

export const listProformaInvoicesResponseSchema: Schema<ListProformaInvoicesResponse> = lazy(
  () =>
    expandoObject({
      proformaInvoices: [
        'proforma_invoices',
        optional(array(proformaInvoiceSchema)),
      ],
      meta: ['meta', optional(listProformaInvoicesMetaSchema)],
    })
);
