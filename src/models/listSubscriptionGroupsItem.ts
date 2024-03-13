/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { GroupType, groupTypeSchema } from './groupType';
import {
  SubscriptionGroupBalances,
  subscriptionGroupBalancesSchema,
} from './subscriptionGroupBalances';

export interface ListSubscriptionGroupsItem {
  uid?: string;
  scheme?: number;
  customerId?: number;
  paymentProfileId?: number;
  subscriptionIds?: number[];
  primarySubscriptionId?: number;
  nextAssessmentAt?: string;
  state?: string;
  cancelAtEndOfPeriod?: boolean;
  accountBalances?: SubscriptionGroupBalances;
  groupType?: GroupType;
  [key: string]: unknown;
}

export const listSubscriptionGroupsItemSchema: Schema<ListSubscriptionGroupsItem> = expandoObject(
  {
    uid: ['uid', optional(string())],
    scheme: ['scheme', optional(number())],
    customerId: ['customer_id', optional(number())],
    paymentProfileId: ['payment_profile_id', optional(number())],
    subscriptionIds: ['subscription_ids', optional(array(number()))],
    primarySubscriptionId: ['primary_subscription_id', optional(number())],
    nextAssessmentAt: ['next_assessment_at', optional(string())],
    state: ['state', optional(string())],
    cancelAtEndOfPeriod: ['cancel_at_end_of_period', optional(boolean())],
    accountBalances: [
      'account_balances',
      optional(lazy(() => subscriptionGroupBalancesSchema)),
    ],
    groupType: ['group_type', optional(groupTypeSchema)],
  }
);
