/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import {
  SubscriptionGroupMemberError,
  subscriptionGroupMemberErrorSchema,
} from './subscriptionGroupMemberError';

export interface SubscriptionGroupUpdateError {
  members?: SubscriptionGroupMemberError[];
  [key: string]: unknown;
}

export const subscriptionGroupUpdateErrorSchema: Schema<SubscriptionGroupUpdateError> = expandoObject(
  {
    members: [
      'members',
      optional(array(lazy(() => subscriptionGroupMemberErrorSchema))),
    ],
  }
);
