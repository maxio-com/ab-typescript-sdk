/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import { SubscriptionMRR, subscriptionMRRSchema } from './subscriptionMRR';

export interface SubscriptionMRRResponse {
  subscriptionsMrr: SubscriptionMRR[];
  [key: string]: unknown;
}

export const subscriptionMRRResponseSchema: Schema<SubscriptionMRRResponse> = expandoObject(
  {
    subscriptionsMrr: [
      'subscriptions_mrr',
      array(lazy(() => subscriptionMRRSchema)),
    ],
  }
);
