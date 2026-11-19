/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema.js';

export interface Errors {
  pricePoint: string[];
  [key: string]: unknown;
}

export const errorsSchema: Schema<Errors> = expandoObject({
  pricePoint: ['price_point', array(string())],
});
