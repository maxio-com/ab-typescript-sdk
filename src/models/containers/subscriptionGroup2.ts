/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  NestedSubscriptionGroup,
  nestedSubscriptionGroupSchema,
} from '../nestedSubscriptionGroup';

/** This is a container type for one-of types. */
export type SubscriptionGroup2 = NestedSubscriptionGroup;

export const subscriptionGroup2Schema: Schema<SubscriptionGroup2> = oneOf([
  nestedSubscriptionGroupSchema,
]);

export namespace SubscriptionGroup2 {
  /**
  * Validation method to narrow down union type to NestedSubscriptionGroup type case.
  *
  * This is Nested Subscription Group case.
  */
  export function isNestedSubscriptionGroup(value: unknown): value is NestedSubscriptionGroup {
    const validationResult = validateAndMap(value, nestedSubscriptionGroupSchema);
    return validationResult.errors === false;
  }
}
