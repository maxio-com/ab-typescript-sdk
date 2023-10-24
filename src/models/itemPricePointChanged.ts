/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, Schema, string } from '../schema';
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
}

export const itemPricePointChangedSchema: Schema<ItemPricePointChanged> = object(
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
