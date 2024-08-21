/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, number, optional, Schema } from '../schema';
import {
  ComponentCustomPrice,
  componentCustomPriceSchema,
} from './componentCustomPrice';

export interface UpdateSubscriptionComponent {
  componentId?: number;
  /** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
  customPrice?: ComponentCustomPrice;
  [key: string]: unknown;
}

export const updateSubscriptionComponentSchema: Schema<UpdateSubscriptionComponent> = expandoObject(
  {
    componentId: ['component_id', optional(number())],
    customPrice: [
      'custom_price',
      optional(lazy(() => componentCustomPriceSchema)),
    ],
  }
);
