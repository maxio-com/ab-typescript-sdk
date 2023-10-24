/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

/** Optional attributes related to billing date and accrual. Note: Only applicable for new subscriptions. */
export interface GroupBilling {
  /** A flag indicating whether or not to accrue charges on the new subscription. */
  accrue?: boolean;
  /** A flag indicating whether or not to align the billing date of the new subscription with the billing date of the primary subscription of the hierarchy's default subscription group. Required to be true if prorate is also true. */
  alignDate?: boolean;
  /** A flag indicating whether or not to prorate billing of the new subscription for the current period. A value of true is ignored unless align_date is also true. */
  prorate?: boolean;
}

export const groupBillingSchema: Schema<GroupBilling> = object({
  accrue: ['accrue', optional(boolean())],
  alignDate: ['align_date', optional(boolean())],
  prorate: ['prorate', optional(boolean())],
});
