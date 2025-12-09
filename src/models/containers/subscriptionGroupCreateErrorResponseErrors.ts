/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  isMappedValueValidForSchema,
  lazy,
  oneOf,
  Schema,
  string,
} from '../../schema.js';
import {
  SubscriptionGroupMembersArrayError,
  subscriptionGroupMembersArrayErrorSchema,
} from '../subscriptionGroupMembersArrayError.js';
import {
  SubscriptionGroupSingleError,
  subscriptionGroupSingleErrorSchema,
} from '../subscriptionGroupSingleError.js';

/** This is a container type for one-of types. */
export type SubscriptionGroupCreateErrorResponseErrors =
  | SubscriptionGroupMembersArrayError
  | SubscriptionGroupSingleError
  | string;

export const subscriptionGroupCreateErrorResponseErrorsSchema: Schema<SubscriptionGroupCreateErrorResponseErrors> = lazy(
  () =>
    oneOf([
      subscriptionGroupMembersArrayErrorSchema,
      subscriptionGroupSingleErrorSchema,
      string(),
    ])
);

export namespace SubscriptionGroupCreateErrorResponseErrors {
  /**
   * Validation method to narrow down union type to SubscriptionGroupMembersArrayError type case.
   *
   * This is Subscription Group Members Array Error case.
   */
  export function isSubscriptionGroupMembersArrayError(
    value: unknown
  ): value is SubscriptionGroupMembersArrayError {
    return isMappedValueValidForSchema(
      value,
      subscriptionGroupMembersArrayErrorSchema
    );
  }

  /**
   * Validation method to narrow down union type to SubscriptionGroupSingleError type case.
   *
   * This is Subscription Group Single Error case.
   */
  export function isSubscriptionGroupSingleError(
    value: unknown
  ): value is SubscriptionGroupSingleError {
    return isMappedValueValidForSchema(
      value,
      subscriptionGroupSingleErrorSchema
    );
  }

  /**
   * Validation method to narrow down union type to string type case.
   *
   * This is String case.
   */
  export function isString(value: unknown): value is string {
    return typeof value === 'string';
  }
}
