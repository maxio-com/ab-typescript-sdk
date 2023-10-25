/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, number, object, optional, Schema } from '../schema';
import {
  ComponentCustomPrice,
  componentCustomPriceSchema,
} from './componentCustomPrice';
import {
  CreateSubscriptionComponentComponentId,
  createSubscriptionComponentComponentIdSchema,
} from './containers/createSubscriptionComponentComponentId';
import {
  CreateSubscriptionComponentPricePointId,
  createSubscriptionComponentPricePointIdSchema,
} from './containers/createSubscriptionComponentPricePointId';

export interface CreateSubscriptionComponent {
  componentId?: CreateSubscriptionComponentComponentId;
  /** Used for on/off components only. */
  enabled?: boolean;
  /** Used for metered and events based components. */
  unitBalance?: number;
  /** Used for quantity based components. */
  allocatedQuantity?: number;
  /** Deprecated. Use `allocated_quantity` instead. */
  quantity?: number;
  pricePointId?: CreateSubscriptionComponentPricePointId;
  /** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
  customPrice?: ComponentCustomPrice;
}

export const createSubscriptionComponentSchema: Schema<CreateSubscriptionComponent> = object(
  {
    componentId: [
      'component_id',
      optional(createSubscriptionComponentComponentIdSchema),
    ],
    enabled: ['enabled', optional(boolean())],
    unitBalance: ['unit_balance', optional(number())],
    allocatedQuantity: ['allocated_quantity', optional(number())],
    quantity: ['quantity', optional(number())],
    pricePointId: [
      'price_point_id',
      optional(createSubscriptionComponentPricePointIdSchema),
    ],
    customPrice: [
      'custom_price',
      optional(lazy(() => componentCustomPriceSchema)),
    ],
  }
);
