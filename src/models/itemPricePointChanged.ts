/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, number, Schema, string } from '../schema';
import {
  ItemPricePointData,
  itemPricePointDataSchema,
} from './itemPricePointData';

export interface ItemPricePointChanged {
  itemId: number;
  itemType: string;
  itemHandle: string;
  itemName: string;
  previousPricePoint: ItemPricePointData;
  currentPricePoint: ItemPricePointData;
  [key: string]: unknown;
}

export const itemPricePointChangedSchema: Schema<ItemPricePointChanged> = expandoObject(
  {
    itemId: ['item_id', number()],
    itemType: ['item_type', string()],
    itemHandle: ['item_handle', string()],
    itemName: ['item_name', string()],
    previousPricePoint: [
      'previous_price_point',
      lazy(() => itemPricePointDataSchema),
    ],
    currentPricePoint: [
      'current_price_point',
      lazy(() => itemPricePointDataSchema),
    ],
  }
);
