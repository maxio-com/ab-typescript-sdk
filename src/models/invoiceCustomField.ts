/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface InvoiceCustomField {
  name?: string;
  value?: string;
  ownerId?: number;
  ownerType?: string;
}

export const invoiceCustomFieldSchema: Schema<InvoiceCustomField> = object({
  name: ['name', optional(string())],
  value: ['value', optional(string())],
  ownerId: ['owner_id', optional(number())],
  ownerType: ['owner_type', optional(string())],
});
