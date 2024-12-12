/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  expandoObject,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CompoundingStrategy,
  compoundingStrategySchema,
} from './compoundingStrategy';
import {
  CouponPayloadPercentage,
  couponPayloadPercentageSchema,
} from './containers/couponPayloadPercentage';

export interface CouponPayload {
  /** Required when creating a new coupon. This name is not displayed to customers and is limited to 255 characters. */
  name?: string;
  /** Required when creating a new coupon. The code is limited to 255 characters. May contain uppercase alphanumeric characters and these special characters (which allow for email addresses to be used): “%”, “@”, “+”, “-”, “_”, and “.” */
  code?: string;
  /** Required when creating a new coupon. A description of the coupon that can be displayed to customers in transactions and on statements. The description is limited to 255 characters. */
  description?: string;
  /** Required when creating a new percentage coupon. Can't be used together with amount_in_cents. Percentage discount */
  percentage?: CouponPayloadPercentage;
  /** Required when creating a new flat amount coupon. Can't be used together with percentage. Flat USD discount */
  amountInCents?: bigint;
  /** If set to true, discount is not limited (credits will carry forward to next billing). Can't be used together with restrictions. */
  allowNegativeBalance?: boolean;
  recurring?: boolean;
  /** After the end of the given day, this coupon code will be invalid for new signups. Recurring discounts started before this date will continue to recur even after this date. */
  endDate?: string;
  productFamilyId?: string;
  /** A stackable coupon can be combined with other coupons on a Subscription. */
  stackable?: boolean;
  /** Applicable only to stackable coupons. For `compound`, Percentage-based discounts will be calculated against the remaining price, after prior discounts have been calculated. For `full-price`, Percentage-based discounts will always be calculated against the original item price, before other discounts are applied. */
  compoundingStrategy?: CompoundingStrategy;
  excludeMidPeriodAllocations?: boolean;
  applyOnCancelAtEndOfPeriod?: boolean;
  applyOnSubscriptionExpiration?: boolean;
  [key: string]: unknown;
}

export const couponPayloadSchema: Schema<CouponPayload> = expandoObject({
  name: ['name', optional(string())],
  code: ['code', optional(string())],
  description: ['description', optional(string())],
  percentage: ['percentage', optional(couponPayloadPercentageSchema)],
  amountInCents: ['amount_in_cents', optional(bigint())],
  allowNegativeBalance: ['allow_negative_balance', optional(boolean())],
  recurring: ['recurring', optional(boolean())],
  endDate: ['end_date', optional(string())],
  productFamilyId: ['product_family_id', optional(string())],
  stackable: ['stackable', optional(boolean())],
  compoundingStrategy: [
    'compounding_strategy',
    optional(compoundingStrategySchema),
  ],
  excludeMidPeriodAllocations: [
    'exclude_mid_period_allocations',
    optional(boolean()),
  ],
  applyOnCancelAtEndOfPeriod: [
    'apply_on_cancel_at_end_of_period',
    optional(boolean()),
  ],
  applyOnSubscriptionExpiration: [
    'apply_on_subscription_expiration',
    optional(boolean()),
  ],
});
