/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, oneOf, Schema, validateAndMap } from '../../schema';
import { GroupSettings, groupSettingsSchema } from '../groupSettings';

/** This is a container type for one-of types. */
export type CreateSubscriptionGroup2 = GroupSettings | boolean;

export const createSubscriptionGroup2Schema: Schema<CreateSubscriptionGroup2> = oneOf(
  [groupSettingsSchema, boolean()]
);

export namespace CreateSubscriptionGroup2 {
  /**
  * Validation method to narrow down union type to GroupSettings type case.
  *
  * This is Group Settings case.
  */
  export function isGroupSettings(value: unknown): value is GroupSettings {
    const validationResult = validateAndMap(value, groupSettingsSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to boolean type case.
  *
  * This is Boolean case.
  */
  export function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
  }
}
