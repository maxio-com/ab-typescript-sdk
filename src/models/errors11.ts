/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface Errors11 {
  pricingScheme?: string[];
  prices?: string[];
}

export const errors11Schema: Schema<Errors11> = object({
  pricingScheme: ['pricing_scheme', optional(array(string()))],
  prices: ['prices', optional(array(string()))],
});
