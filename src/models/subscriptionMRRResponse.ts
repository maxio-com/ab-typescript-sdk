/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import { SubscriptionMRR, subscriptionMRRSchema } from './subscriptionMRR.js';

export interface SubscriptionMRRResponse {
  subscriptionsMrr: SubscriptionMRR[];
  [key: string]: unknown;
}

export const subscriptionMRRResponseSchema: Schema<SubscriptionMRRResponse> = lazy(
  () =>
    expandoObject({
      subscriptionsMrr: ['subscriptions_mrr', array(subscriptionMRRSchema)],
    })
);
