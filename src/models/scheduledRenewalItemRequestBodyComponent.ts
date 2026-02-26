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
  ScheduledRenewalComponentCustomPrice,
  scheduledRenewalComponentCustomPriceSchema,
} from './scheduledRenewalComponentCustomPrice.js';

export interface ScheduledRenewalItemRequestBodyComponent {
  /** Item type to add. Either Product or Component. */
  itemType: string;
  /** Product or component identifier. */
  itemId: number;
  /** Price point identifier. */
  pricePointId?: number;
  /** Optional quantity for the item. */
  quantity?: number;
  /** Custom pricing for a component within a scheduled renewal. */
  customPrice?: ScheduledRenewalComponentCustomPrice;
  [key: string]: unknown;
}

export const scheduledRenewalItemRequestBodyComponentSchema: Schema<ScheduledRenewalItemRequestBodyComponent> = lazy(
  () =>
    expandoObject({
      itemType: ['item_type', string()],
      itemId: ['item_id', number()],
      pricePointId: ['price_point_id', optional(number())],
      quantity: ['quantity', optional(number())],
      customPrice: [
        'custom_price',
        optional(scheduledRenewalComponentCustomPriceSchema),
      ],
    })
);
