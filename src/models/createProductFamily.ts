/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, optional, Schema, string } from '../schema';

export interface CreateProductFamily {
  name?: string;
  description?: string | null;
  [key: string]: unknown;
}

export const createProductFamilySchema: Schema<CreateProductFamily> = expandoObject(
  {
    name: ['name', optional(string())],
    description: ['description', optional(nullable(string()))],
  }
);
