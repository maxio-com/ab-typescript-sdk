/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, oneOf, Schema, validateAndMap } from '../../schema';
import { SnapDay, snapDaySchema } from '../snapDay';

/** This is a container type for one-of types. */
export type UpdateSubscriptionSnapDay = SnapDay | number;

export const updateSubscriptionSnapDaySchema: Schema<UpdateSubscriptionSnapDay> = oneOf(
  [snapDaySchema, number()]
);

export namespace UpdateSubscriptionSnapDay {
  /**
   * Validation method to narrow down union type to SnapDay type case.
   *
   * This is SnapDay case.
   */
  export function isSnapDay(value: unknown): value is SnapDay {
    const validationResult = validateAndMap(value, snapDaySchema);
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
