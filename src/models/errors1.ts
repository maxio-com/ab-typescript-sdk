/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema.js';

export interface Errors1 {
  perPage?: string[];
  pricePoint?: string[];
  [key: string]: unknown;
}

export const errors1Schema: Schema<Errors1> = expandoObject({
  perPage: ['per_page', optional(array(string()))],
  pricePoint: ['price_point', optional(array(string()))],
});
