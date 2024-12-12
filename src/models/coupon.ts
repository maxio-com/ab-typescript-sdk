/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CompoundingStrategy,
  compoundingStrategySchema,
} from './compoundingStrategy';
import { CouponCurrency, couponCurrencySchema } from './couponCurrency';
import {
  CouponRestriction,
  couponRestrictionSchema,
} from './couponRestriction';
import { DiscountType, discountTypeSchema } from './discountType';
import { RecurringScheme, recurringSchemeSchema } from './recurringScheme';

export interface Coupon {
  id?: number;
  name?: string;
  code?: string;
  description?: string;
  amount?: number | null;
  amountInCents?: bigint | null;
  productFamilyId?: number;
  productFamilyName?: string | null;
  startDate?: string;
  /** After the given time, this coupon code will be invalid for new signups. Recurring discounts started before this date will continue to recur even after this date. */
  endDate?: string | null;
  percentage?: string | null;
  recurring?: boolean;
  recurringScheme?: RecurringScheme;
  durationPeriodCount?: number | null;
  durationInterval?: number | null;
  durationIntervalUnit?: string | null;
  durationIntervalSpan?: string | null;
  /** If set to true, discount is not limited (credits will carry forward to next billing). */
  allowNegativeBalance?: boolean;
  archivedAt?: string | null;
  conversionLimit?: string | null;
  /** A stackable coupon can be combined with other coupons on a Subscription. */
  stackable?: boolean;
  /** Applicable only to stackable coupons. For `compound`, Percentage-based discounts will be calculated against the remaining price, after prior discounts have been calculated. For `full-price`, Percentage-based discounts will always be calculated against the original item price, before other discounts are applied. */
  compoundingStrategy?: CompoundingStrategy | null;
  useSiteExchangeRate?: boolean;
  createdAt?: string;
  updatedAt?: string;
  discountType?: DiscountType;
  excludeMidPeriodAllocations?: boolean;
  applyOnCancelAtEndOfPeriod?: boolean;
  applyOnSubscriptionExpiration?: boolean;
  couponRestrictions?: CouponRestriction[];
  /** Returned in read, find, and list endpoints if the query parameter is provided. */
  currencyPrices?: CouponCurrency[];
  [key: string]: unknown;
}

export const couponSchema: Schema<Coupon> = expandoObject({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  code: ['code', optional(string())],
  description: ['description', optional(string())],
  amount: ['amount', optional(nullable(number()))],
  amountInCents: ['amount_in_cents', optional(nullable(bigint()))],
  productFamilyId: ['product_family_id', optional(number())],
  productFamilyName: ['product_family_name', optional(nullable(string()))],
  startDate: ['start_date', optional(string())],
  endDate: ['end_date', optional(nullable(string()))],
  percentage: ['percentage', optional(nullable(string()))],
  recurring: ['recurring', optional(boolean())],
  recurringScheme: ['recurring_scheme', optional(recurringSchemeSchema)],
  durationPeriodCount: ['duration_period_count', optional(nullable(number()))],
  durationInterval: ['duration_interval', optional(nullable(number()))],
  durationIntervalUnit: [
    'duration_interval_unit',
    optional(nullable(string())),
  ],
  durationIntervalSpan: [
    'duration_interval_span',
    optional(nullable(string())),
  ],
  allowNegativeBalance: ['allow_negative_balance', optional(boolean())],
  archivedAt: ['archived_at', optional(nullable(string()))],
  conversionLimit: ['conversion_limit', optional(nullable(string()))],
  stackable: ['stackable', optional(boolean())],
  compoundingStrategy: [
    'compounding_strategy',
    optional(nullable(compoundingStrategySchema)),
  ],
  useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  discountType: ['discount_type', optional(discountTypeSchema)],
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
  couponRestrictions: [
    'coupon_restrictions',
    optional(array(lazy(() => couponRestrictionSchema))),
  ],
  currencyPrices: [
    'currency_prices',
    optional(array(lazy(() => couponCurrencySchema))),
  ],
});
