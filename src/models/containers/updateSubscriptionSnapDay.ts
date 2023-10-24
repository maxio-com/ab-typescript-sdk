/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, oneOf, Schema, validateAndMap } from '../../schema';
import { SnapDayOneOf0, snapDayOneOf0Schema } from '../snapDayOneOf0';

/** This is a container type for one-of types. */
export type UpdateSubscriptionSnapDay = SnapDayOneOf0 | number;

export const updateSubscriptionSnapDaySchema: Schema<UpdateSubscriptionSnapDay> = oneOf(
  [snapDayOneOf0Schema, number()]
);

export namespace UpdateSubscriptionSnapDay {
  /**
  * Validation method to narrow down union type to SnapDayOneOf0 type case.
  *
  * This is SnapDay_OneOf0 case.
  */
  export function isSnapDayOneOf0(value: unknown): value is SnapDayOneOf0 {
    const validationResult = validateAndMap(value, snapDayOneOf0Schema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to number type case.
  *
  * This is Number case.
  */
  export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }
}
