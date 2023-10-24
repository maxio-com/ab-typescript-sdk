/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  ListSubscriptionGroupsItem,
  listSubscriptionGroupsItemSchema,
} from './listSubscriptionGroupsItem';
import {
  ListSubscriptionGroupsMeta,
  listSubscriptionGroupsMetaSchema,
} from './listSubscriptionGroupsMeta';

export interface ListSubscriptionGroupsResponse {
  subscriptionGroups?: ListSubscriptionGroupsItem[];
  meta?: ListSubscriptionGroupsMeta;
}

export const listSubscriptionGroupsResponseSchema: Schema<ListSubscriptionGroupsResponse> = object(
  {
    subscriptionGroups: [
      'subscription_groups',
      optional(array(lazy(() => listSubscriptionGroupsItemSchema))),
    ],
    meta: ['meta', optional(lazy(() => listSubscriptionGroupsMetaSchema))],
  }
);
