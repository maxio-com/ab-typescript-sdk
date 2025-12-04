/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
} from '../schema.js';
import {
  ComponentCustomPrice,
  componentCustomPriceSchema,
} from './componentCustomPrice.js';
import {
  CreateSubscriptionComponentAllocatedQuantity,
  createSubscriptionComponentAllocatedQuantitySchema,
} from './containers/createSubscriptionComponentAllocatedQuantity.js';
import {
  CreateSubscriptionComponentComponentId,
  createSubscriptionComponentComponentIdSchema,
} from './containers/createSubscriptionComponentComponentId.js';
import {
  CreateSubscriptionComponentPricePointId,
  createSubscriptionComponentPricePointIdSchema,
} from './containers/createSubscriptionComponentPricePointId.js';

export interface CreateSubscriptionComponent {
  componentId?: CreateSubscriptionComponentComponentId;
  /** Used for on/off components only. */
  enabled?: boolean;
  /** Used for metered and events based components. */
  unitBalance?: number;
  /** Used for quantity based components. */
  allocatedQuantity?: CreateSubscriptionComponentAllocatedQuantity;
  /** Deprecated. Use `allocated_quantity` instead. */
  quantity?: number;
  pricePointId?: CreateSubscriptionComponentPricePointId;
  /** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
  customPrice?: ComponentCustomPrice;
  [key: string]: unknown;
}

export const createSubscriptionComponentSchema: Schema<CreateSubscriptionComponent> = lazy(
  () =>
    expandoObject({
      componentId: [
        'component_id',
        optional(createSubscriptionComponentComponentIdSchema),
      ],
      enabled: ['enabled', optional(boolean())],
      unitBalance: ['unit_balance', optional(number())],
      allocatedQuantity: [
        'allocated_quantity',
        optional(createSubscriptionComponentAllocatedQuantitySchema),
      ],
      quantity: ['quantity', optional(number())],
      pricePointId: [
        'price_point_id',
        optional(createSubscriptionComponentPricePointIdSchema),
      ],
      customPrice: ['custom_price', optional(componentCustomPriceSchema)],
    })
);
