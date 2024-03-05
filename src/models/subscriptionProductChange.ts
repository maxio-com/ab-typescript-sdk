/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema } from '../schema';

export interface SubscriptionProductChange {
  previousProductId: number;
  newProductId: number;
  [key: string]: unknown;
}

export const subscriptionProductChangeSchema: Schema<SubscriptionProductChange> = expandoObject(
  {
    previousProductId: ['previous_product_id', number()],
    newProductId: ['new_product_id', number()],
  }
);
