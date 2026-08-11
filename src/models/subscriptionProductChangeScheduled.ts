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

export interface SubscriptionProductChangeScheduled {
  previousProductId: number;
  newProductId: number;
  previousProductPricePointId?: number | null;
  newProductPricePointId?: number | null;
  /** When the scheduled product change takes effect (the subscription's next renewal). */
  effectiveAt?: string | null;
  [key: string]: unknown;
}

export const subscriptionProductChangeScheduledSchema: Schema<SubscriptionProductChangeScheduled> = expandoObject(
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
