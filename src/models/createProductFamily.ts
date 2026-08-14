/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';

export interface CreateProductFamily {
  name: string;
  handle?: string | null;
  description?: string | null;
  /** Whether surcharging applies to this product family. Defaults to `true` when omitted. Only applied on sites where surcharging is enabled. */
  surcharging?: boolean;
  [key: string]: unknown;
}

export const createProductFamilySchema: Schema<CreateProductFamily> = expandoObject(
  {
    name: ['name', string()],
    handle: ['handle', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    surcharging: ['surcharging', optional(boolean())],
  }
);
