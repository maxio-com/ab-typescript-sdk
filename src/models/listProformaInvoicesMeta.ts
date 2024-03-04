/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';

export interface ListProformaInvoicesMeta {
  totalCount?: number;
  currentPage?: number;
  totalPages?: number;
  statusCode?: number;
  [key: string]: unknown;
}

export const listProformaInvoicesMetaSchema: Schema<ListProformaInvoicesMeta> = expandoObject(
  {
    totalCount: ['total_count', optional(number())],
    currentPage: ['current_page', optional(number())],
    totalPages: ['total_pages', optional(number())],
    statusCode: ['status_code', optional(number())],
  }
);
