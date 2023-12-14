/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface NestedSubscriptionGroup {
  /** The UID for the group */
  uid?: string;
  /** Whether the group is configured to rely on a primary subscription for billing. At this time, it will always be 1. */
  scheme?: number;
  /** The subscription ID of the primary within the group. Applicable to scheme 1. */
  primarySubscriptionId?: number;
  /** A boolean indicating whether the subscription is the primary in the group. Applicable to scheme 1. */
  primary?: boolean;
}

export const nestedSubscriptionGroupSchema: Schema<NestedSubscriptionGroup> = object(
  {
    uid: ['uid', optional(string())],
    scheme: ['scheme', optional(number())],
    primarySubscriptionId: ['primary_subscription_id', optional(number())],
    primary: ['primary', optional(boolean())],
  }
);
