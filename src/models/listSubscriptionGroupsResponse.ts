/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
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
  [key: string]: unknown;
}

export const listSubscriptionGroupsResponseSchema: Schema<ListSubscriptionGroupsResponse> = expandoObject(
  {
    subscriptionGroups: [
      'subscription_groups',
      optional(array(lazy(() => listSubscriptionGroupsItemSchema))),
    ],
    meta: ['meta', optional(lazy(() => listSubscriptionGroupsMetaSchema))],
  }
);
