/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
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
  amountInCents?: number | null;
  productFamilyId?: number;
  productFamilyName?: string | null;
  startDate?: string;
  endDate?: string | null;
  percentage?: string | null;
  recurring?: boolean;
  recurringScheme?: RecurringScheme;
  durationPeriodCount?: number | null;
  durationInterval?: number | null;
  durationIntervalUnit?: string | null;
  durationIntervalSpan?: string | null;
  allowNegativeBalance?: boolean;
  archivedAt?: string | null;
  conversionLimit?: string | null;
  stackable?: boolean;
  compoundingStrategy?: CompoundingStrategy | null;
  useSiteExchangeRate?: boolean;
  createdAt?: string;
  updatedAt?: string;
  discountType?: DiscountType;
  excludeMidPeriodAllocations?: boolean;
  applyOnCancelAtEndOfPeriod?: boolean;
  applyOnSubscriptionExpiration?: boolean;
  couponRestrictions?: CouponRestriction[];
  [key: string]: unknown;
}

export const couponSchema: Schema<Coupon> = expandoObject({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  code: ['code', optional(string())],
  description: ['description', optional(string())],
  amount: ['amount', optional(nullable(number()))],
  amountInCents: ['amount_in_cents', optional(nullable(number()))],
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
});
