/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  UpdateSubscriptionGroup,
  updateSubscriptionGroupSchema,
} from './updateSubscriptionGroup';

export interface UpdateSubscriptionGroupRequest {
  subscriptionGroup: UpdateSubscriptionGroup;
  [key: string]: unknown;
}

export const updateSubscriptionGroupRequestSchema: Schema<UpdateSubscriptionGroupRequest> = expandoObject(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => updateSubscriptionGroupSchema),
    ],
  }
);
