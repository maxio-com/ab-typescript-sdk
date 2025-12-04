/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  ListSubscriptionGroupsItem,
  listSubscriptionGroupsItemSchema,
} from './listSubscriptionGroupsItem.js';
import {
  ListSubscriptionGroupsMeta,
  listSubscriptionGroupsMetaSchema,
} from './listSubscriptionGroupsMeta.js';

export interface ListSubscriptionGroupsResponse {
  subscriptionGroups?: ListSubscriptionGroupsItem[];
  meta?: ListSubscriptionGroupsMeta;
  [key: string]: unknown;
}

export const listSubscriptionGroupsResponseSchema: Schema<ListSubscriptionGroupsResponse> = lazy(
  () =>
    expandoObject({
      subscriptionGroups: [
        'subscription_groups',
        optional(array(listSubscriptionGroupsItemSchema)),
      ],
      meta: ['meta', optional(listSubscriptionGroupsMetaSchema)],
    })
);
