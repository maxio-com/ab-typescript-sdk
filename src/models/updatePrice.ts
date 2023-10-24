/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface UpdatePrice {
  id?: number;
  endingQuantity?: number;
  unitPrice?: number;
  destroy?: string;
  startingQuantity?: number;
}

export const updatePriceSchema: Schema<UpdatePrice> = object({
  id: ['id', optional(number())],
  endingQuantity: ['ending_quantity', optional(number())],
  unitPrice: ['unit_price', optional(number())],
  destroy: ['_destroy', optional(string())],
  startingQuantity: ['starting_quantity', optional(number())],
});
