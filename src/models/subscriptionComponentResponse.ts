/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  SubscriptionComponent,
  subscriptionComponentSchema,
} from './subscriptionComponent.js';

export interface SubscriptionComponentResponse {
  component?: SubscriptionComponent;
  [key: string]: unknown;
}

export const subscriptionComponentResponseSchema: Schema<SubscriptionComponentResponse> = lazy(
  () =>
    expandoObject({
      component: ['component', optional(subscriptionComponentSchema)],
    })
);
