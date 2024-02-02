/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { CustomFieldOwner, customFieldOwnerSchema } from './customFieldOwner';

export interface InvoiceCustomField {
  ownerId?: number;
  ownerType?: CustomFieldOwner;
  name?: string;
  value?: string;
  metadatumId?: number;
}

export const invoiceCustomFieldSchema: Schema<InvoiceCustomField> = object({
  ownerId: ['owner_id', optional(number())],
  ownerType: ['owner_type', optional(customFieldOwnerSchema)],
  name: ['name', optional(string())],
  value: ['value', optional(string())],
  metadatumId: ['metadatum_id', optional(number())],
});
