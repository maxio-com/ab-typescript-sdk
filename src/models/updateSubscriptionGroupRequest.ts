/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  UpdateSubscriptionGroup,
  updateSubscriptionGroupSchema,
} from './updateSubscriptionGroup';

export interface UpdateSubscriptionGroupRequest {
  subscriptionGroup: UpdateSubscriptionGroup;
}

export const updateSubscriptionGroupRequestSchema: Schema<UpdateSubscriptionGroupRequest> = object(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => updateSubscriptionGroupSchema),
    ],
  }
);
