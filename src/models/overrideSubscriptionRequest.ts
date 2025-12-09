/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  OverrideSubscription,
  overrideSubscriptionSchema,
} from './overrideSubscription.js';

export interface OverrideSubscriptionRequest {
  subscription: OverrideSubscription;
  [key: string]: unknown;
}

export const overrideSubscriptionRequestSchema: Schema<OverrideSubscriptionRequest> = lazy(
  () =>
    expandoObject({
      subscription: ['subscription', overrideSubscriptionSchema],
    })
);
