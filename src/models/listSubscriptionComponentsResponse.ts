/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import {
  SubscriptionComponent,
  subscriptionComponentSchema,
} from './subscriptionComponent';

export interface ListSubscriptionComponentsResponse {
  subscriptionsComponents: SubscriptionComponent[];
  [key: string]: unknown;
}

export const listSubscriptionComponentsResponseSchema: Schema<ListSubscriptionComponentsResponse> = expandoObject(
  {
    subscriptionsComponents: [
      'subscriptions_components',
      array(lazy(() => subscriptionComponentSchema)),
    ],
  }
);
