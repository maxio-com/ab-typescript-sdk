/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';

export interface Price1 {
  startingQuantity?: number;
  endingQuantity?: number | null;
  unitPrice?: string;
  [key: string]: unknown;
}

export const price1Schema: Schema<Price1> = expandoObject({
  startingQuantity: ['starting_quantity', optional(number())],
  endingQuantity: ['ending_quantity', optional(nullable(number()))],
  unitPrice: ['unit_price', optional(string())],
});
