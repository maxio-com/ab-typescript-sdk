/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  SubscriptionGroupInlined,
  subscriptionGroupInlinedSchema,
} from '../subscriptionGroupInlined';

/** This is a container type for one-of types. */
export type SubscriptionGroup2 = SubscriptionGroupInlined;

export const subscriptionGroup2Schema: Schema<SubscriptionGroup2> = oneOf([
  subscriptionGroupInlinedSchema,
]);

export namespace SubscriptionGroup2 {
  /**
  * Validation method to narrow down union type to SubscriptionGroupInlined type case.
  *
  * This is Subscription Group Inlined case.
  */
  export function isSubscriptionGroupInlined(value: unknown): value is SubscriptionGroupInlined {
    const validationResult = validateAndMap(value, subscriptionGroupInlinedSchema);
    return validationResult.errors === false;
  }
}
