/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  isMappedValueValidForSchema,
  number,
  oneOf,
  Schema,
} from '../../schema.js';
import { SnapDay, snapDaySchema } from '../snapDay.js';

/** This is a container type for one-of types. */
export type CalendarBillingSnapDay = number | SnapDay;

export const calendarBillingSnapDaySchema: Schema<CalendarBillingSnapDay> = oneOf(
  [number(), snapDaySchema]
);

export namespace CalendarBillingSnapDay {
  /**
   * Validation method to narrow down union type to number type case.
   *
   * This is Number case.
   */
  export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }

  /**
   * Validation method to narrow down union type to SnapDay type case.
   *
   * This is SnapDay case.
   */
  export function isSnapDay(value: unknown): value is SnapDay {
    return isMappedValueValidForSchema(value, snapDaySchema);
  }
}
