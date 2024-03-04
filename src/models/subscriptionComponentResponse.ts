/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import {
  SubscriptionComponent,
  subscriptionComponentSchema,
} from './subscriptionComponent';

export interface SubscriptionComponentResponse {
  component?: SubscriptionComponent;
  [key: string]: unknown;
}

export const subscriptionComponentResponseSchema: Schema<SubscriptionComponentResponse> = expandoObject(
  {
    component: ['component', optional(lazy(() => subscriptionComponentSchema))],
  }
);
