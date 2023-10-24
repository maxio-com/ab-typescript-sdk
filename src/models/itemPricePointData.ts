/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface ItemPricePointData {
  id?: number;
  handle?: string;
  name?: string;
}

export const itemPricePointDataSchema: Schema<ItemPricePointData> = object({
  id: ['id', optional(number())],
  handle: ['handle', optional(string())],
  name: ['name', optional(string())],
});
