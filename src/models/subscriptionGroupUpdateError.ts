/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  SubscriptionGroupMemberError,
  subscriptionGroupMemberErrorSchema,
} from './subscriptionGroupMemberError';

export interface SubscriptionGroupUpdateError {
  members?: SubscriptionGroupMemberError[];
}

export const subscriptionGroupUpdateErrorSchema: Schema<SubscriptionGroupUpdateError> = object(
  {
    members: [
      'members',
      optional(array(lazy(() => subscriptionGroupMemberErrorSchema))),
    ],
  }
);
