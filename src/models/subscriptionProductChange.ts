/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';

/** Event data for both `subscription_product_change` and `subscription_product_change_scheduled`. The price point and `effective_at` fields are only populated for scheduled changes. */
export interface SubscriptionProductChange {
  previousProductId: number;
  newProductId: number;
  previousProductPricePointId?: number | null;
  newProductPricePointId?: number | null;
  /** When the scheduled product change takes effect (the subscription's next renewal). Only sent for `subscription_product_change_scheduled`. */
  effectiveAt?: string | null;
  [key: string]: unknown;
}

export const subscriptionProductChangeSchema: Schema<SubscriptionProductChange> = expandoObject(
  {
    previousProductId: ['previous_product_id', number()],
    newProductId: ['new_product_id', number()],
    previousProductPricePointId: [
      'previous_product_price_point_id',
      optional(nullable(number())),
    ],
    newProductPricePointId: [
      'new_product_price_point_id',
      optional(nullable(number())),
    ],
    effectiveAt: ['effective_at', optional(nullable(string()))],
  }
);
