/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface ItemPricePointData {
  id?: number;
  handle?: string;
  name?: string;
  [key: string]: unknown;
}

export const itemPricePointDataSchema: Schema<ItemPricePointData> = expandoObject(
  {
    id: ['id', optional(number())],
    handle: ['handle', optional(string())],
    name: ['name', optional(string())],
  }
);
