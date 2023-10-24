/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface CreateProductFamily {
  name?: string;
  description?: string | null;
}

export const createProductFamilySchema: Schema<CreateProductFamily> = object({
  name: ['name', optional(string())],
  description: ['description', optional(nullable(string()))],
});
