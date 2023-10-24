/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, oneOf, Schema } from '../../schema';

/** This is a container type for one-of types. */
export type SubscriptionPrepaidDunning = boolean;

export const subscriptionPrepaidDunningSchema: Schema<SubscriptionPrepaidDunning> = oneOf(
  [boolean()]
);

export namespace SubscriptionPrepaidDunning {
  /**
  * Validation method to narrow down union type to boolean type case.
  *
  * This is Boolean case.
  */
  export function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
  }
}
