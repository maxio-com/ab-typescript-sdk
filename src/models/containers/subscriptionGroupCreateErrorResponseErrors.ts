/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, string, validateAndMap } from '../../schema';
import {
  SubscriptionGroupMembersArrayError,
  subscriptionGroupMembersArrayErrorSchema,
} from '../subscriptionGroupMembersArrayError';
import {
  SubscriptionGroupSingleError,
  subscriptionGroupSingleErrorSchema,
} from '../subscriptionGroupSingleError';

/** This is a container type for one-of types. */
export type SubscriptionGroupCreateErrorResponseErrors =
  | SubscriptionGroupMembersArrayError
  | SubscriptionGroupSingleError
  | string;

export const subscriptionGroupCreateErrorResponseErrorsSchema: Schema<SubscriptionGroupCreateErrorResponseErrors> = oneOf(
  [
    subscriptionGroupMembersArrayErrorSchema,
    subscriptionGroupSingleErrorSchema,
    string(),
  ]
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
    const validationResult = validateAndMap(
      value,
      subscriptionGroupMembersArrayErrorSchema
    );
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to SubscriptionGroupSingleError type case.
   *
   * This is Subscription Group Single Error case.
   */
  export function isSubscriptionGroupSingleError(
    value: unknown
  ): value is SubscriptionGroupSingleError {
    const validationResult = validateAndMap(
      value,
      subscriptionGroupSingleErrorSchema
    );
    return validationResult.errors === false;
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
