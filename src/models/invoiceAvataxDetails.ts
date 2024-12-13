/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  nullable,
  optional,
  Schema,
  string,
} from '../schema';

export interface InvoiceAvataxDetails {
  id?: bigint | null;
  status?: string | null;
  documentCode?: string | null;
  commitDate?: string | null;
  modifyDate?: string | null;
  [key: string]: unknown;
}

export const invoiceAvataxDetailsSchema: Schema<InvoiceAvataxDetails> = expandoObject(
  {
    id: ['id', optional(nullable(bigint()))],
    status: ['status', optional(nullable(string()))],
    documentCode: ['document_code', optional(nullable(string()))],
    commitDate: ['commit_date', optional(nullable(string()))],
    modifyDate: ['modify_date', optional(nullable(string()))],
  }
);
