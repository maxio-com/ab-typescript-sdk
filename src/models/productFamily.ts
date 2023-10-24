/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface ProductFamily {
  id?: number;
  name?: string;
  handle?: string;
  accountingCode?: string | null;
  description?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export const productFamilySchema: Schema<ProductFamily> = object({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  handle: ['handle', optional(string())],
  accountingCode: ['accounting_code', optional(nullable(string()))],
  description: ['description', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
