/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  ScheduledRenewalProductPricePoint,
  scheduledRenewalProductPricePointSchema,
} from './scheduledRenewalProductPricePoint.js';

export interface ScheduledRenewalItemRequestBodyProduct {
  /** Item type to add. Either Product or Component. */
  itemType: string;
  /** Product or component identifier. */
  itemId: number;
  /** Price point identifier. */
  pricePointId?: number;
  /** Optional quantity for the item. */
  quantity?: number;
  /** Custom pricing for a product within a scheduled renewal. */
  customPrice?: ScheduledRenewalProductPricePoint;
  [key: string]: unknown;
}

export const scheduledRenewalItemRequestBodyProductSchema: Schema<ScheduledRenewalItemRequestBodyProduct> = lazy(
  () =>
    expandoObject({
      itemType: ['item_type', string()],
      itemId: ['item_id', number()],
      pricePointId: ['price_point_id', optional(number())],
      quantity: ['quantity', optional(number())],
      customPrice: [
        'custom_price',
        optional(scheduledRenewalProductPricePointSchema),
      ],
    })
);
