/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface ProformaCustomField {
  ownerId?: number;
  ownerType?: string;
  name?: string;
  value?: string;
  metadatumId?: number;
}

export const proformaCustomFieldSchema: Schema<ProformaCustomField> = object({
  ownerId: ['owner_id', optional(number())],
  ownerType: ['owner_type', optional(string())],
  name: ['name', optional(string())],
  value: ['value', optional(string())],
  metadatumId: ['metadatum_id', optional(number())],
});
