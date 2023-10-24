/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface ReactivateSubscriptionGroupResponse {
  uid?: string;
  scheme?: number;
  customerId?: number;
  paymentProfileId?: number;
  subscriptionIds?: number[];
  primarySubscriptionId?: number;
  nextAssessmentAt?: string;
  state?: string;
  cancelAtEndOfPeriod?: boolean;
}

export const reactivateSubscriptionGroupResponseSchema: Schema<ReactivateSubscriptionGroupResponse> = object(
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
  }
);
