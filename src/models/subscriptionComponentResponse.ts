/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  SubscriptionComponent,
  subscriptionComponentSchema,
} from './subscriptionComponent';

export interface SubscriptionComponentResponse {
  component?: SubscriptionComponent;
}

export const subscriptionComponentResponseSchema: Schema<SubscriptionComponentResponse> = object(
  {
    component: ['component', optional(lazy(() => subscriptionComponentSchema))],
  }
);
