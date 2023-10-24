/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema } from '../schema';
import {
  ComponentCustomPrice,
  componentCustomPriceSchema,
} from './componentCustomPrice';

export interface UpdateSubscriptionComponent {
  componentId?: number;
  /** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
  customPrice?: ComponentCustomPrice;
}

export const updateSubscriptionComponentSchema: Schema<UpdateSubscriptionComponent> = object(
  {
    componentId: ['component_id', optional(number())],
    customPrice: [
      'custom_price',
      optional(lazy(() => componentCustomPriceSchema)),
    ],
  }
);
