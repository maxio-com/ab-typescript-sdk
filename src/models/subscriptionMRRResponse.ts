/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { SubscriptionMRR, subscriptionMRRSchema } from './subscriptionMRR';

export interface SubscriptionMRRResponse {
  subscriptionsMrr: SubscriptionMRR[];
}

export const subscriptionMRRResponseSchema: Schema<SubscriptionMRRResponse> = object(
  {
    subscriptionsMrr: [
      'subscriptions_mrr',
      array(lazy(() => subscriptionMRRSchema)),
    ],
  }
);
