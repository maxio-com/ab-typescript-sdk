/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  CalendarBillingSnapDay,
  calendarBillingSnapDaySchema,
} from './containers/calendarBillingSnapDay.js';
import { FirstChargeType, firstChargeTypeSchema } from './firstChargeType.js';

/** (Optional). Cannot be used when also specifying next_billing_at */
export interface CalendarBilling {
  /** A day of month that subscription will be processed on. Can be 1 up to 28 or 'end'. */
  snapDay?: CalendarBillingSnapDay;
  calendarBillingFirstCharge?: FirstChargeType;
  [key: string]: unknown;
}

export const calendarBillingSchema: Schema<CalendarBilling> = lazy(() =>
  expandoObject({
    snapDay: ['snap_day', optional(calendarBillingSnapDaySchema)],
    calendarBillingFirstCharge: [
      'calendar_billing_first_charge',
      optional(firstChargeTypeSchema),
    ],
  })
);
