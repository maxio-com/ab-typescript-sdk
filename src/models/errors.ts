/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema';

export interface Errors {
  perPage?: string[];
  pricePoint?: string[];
  [key: string]: unknown;
}

export const errorsSchema: Schema<Errors> = expandoObject({
  perPage: ['per_page', optional(array(string()))],
  pricePoint: ['price_point', optional(array(string()))],
});
