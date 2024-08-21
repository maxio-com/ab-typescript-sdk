/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, optional, Schema, string } from '../schema';

export interface CreateProductFamily {
  name: string;
  handle?: string | null;
  description?: string | null;
  [key: string]: unknown;
}

export const createProductFamilySchema: Schema<CreateProductFamily> = expandoObject(
  {
    name: ['name', string()],
    handle: ['handle', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
  }
);
