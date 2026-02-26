/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema.js';

export interface CloneComponentPricePoint {
  name: string;
  handle?: string;
  [key: string]: unknown;
}

export const cloneComponentPricePointSchema: Schema<CloneComponentPricePoint> = expandoObject(
  { name: ['name', string()], handle: ['handle', optional(string())] }
);
