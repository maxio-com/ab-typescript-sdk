/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  SubscriptionComponent,
  subscriptionComponentSchema,
} from './subscriptionComponent';

export interface ListSubscriptionComponentsResponse {
  subscriptionsComponents: SubscriptionComponent[];
}

export const listSubscriptionComponentsResponseSchema: Schema<ListSubscriptionComponentsResponse> = object(
  {
    subscriptionsComponents: [
      'subscriptions_components',
      array(lazy(() => subscriptionComponentSchema)),
    ],
  }
);
