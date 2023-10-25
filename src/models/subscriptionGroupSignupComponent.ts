/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  SubscriptionGroupSignupComponentAllocatedQuantity,
  subscriptionGroupSignupComponentAllocatedQuantitySchema,
} from './containers/subscriptionGroupSignupComponentAllocatedQuantity';
import {
  SubscriptionGroupSignupComponentComponentId,
  subscriptionGroupSignupComponentComponentIdSchema,
} from './containers/subscriptionGroupSignupComponentComponentId';
import {
  SubscriptionGroupSignupComponentPricePointId,
  subscriptionGroupSignupComponentPricePointIdSchema,
} from './containers/subscriptionGroupSignupComponentPricePointId';
import {
  SubscriptionGroupSignupComponentUnitBalance,
  subscriptionGroupSignupComponentUnitBalanceSchema,
} from './containers/subscriptionGroupSignupComponentUnitBalance';
import {
  SubscriptionGroupComponentCustomPrice,
  subscriptionGroupComponentCustomPriceSchema,
} from './subscriptionGroupComponentCustomPrice';

export interface SubscriptionGroupSignupComponent {
  /** Required if passing any component to `components` attribute. */
  componentId?: SubscriptionGroupSignupComponentComponentId;
  allocatedQuantity?: SubscriptionGroupSignupComponentAllocatedQuantity;
  unitBalance?: SubscriptionGroupSignupComponentUnitBalance;
  pricePointId?: SubscriptionGroupSignupComponentPricePointId;
  /** Used in place of `price_point_id` to define a custom price point unique to the subscription. You still need to provide `component_id`. */
  customPrice?: SubscriptionGroupComponentCustomPrice;
}

export const subscriptionGroupSignupComponentSchema: Schema<SubscriptionGroupSignupComponent> = object(
  {
    componentId: [
      'component_id',
      optional(subscriptionGroupSignupComponentComponentIdSchema),
    ],
    allocatedQuantity: [
      'allocated_quantity',
      optional(subscriptionGroupSignupComponentAllocatedQuantitySchema),
    ],
    unitBalance: [
      'unit_balance',
      optional(subscriptionGroupSignupComponentUnitBalanceSchema),
    ],
    pricePointId: [
      'price_point_id',
      optional(subscriptionGroupSignupComponentPricePointIdSchema),
    ],
    customPrice: [
      'custom_price',
      optional(lazy(() => subscriptionGroupComponentCustomPriceSchema)),
    ],
  }
);
