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

export interface CreateOrUpdateFlatAmountCoupon {
  /** the name of the coupon */
  name: string;
  /** may contain uppercase alphanumeric characters and these special characters (which allow for email addresses to be used): “%”, “@”, “+”, “-”, “_”, and “.” */
  code: string;
  description?: string;
  amountInCents: bigint;
  allowNegativeBalance?: boolean;
  recurring?: boolean;
  endDate?: string;
  productFamilyId?: string;
  stackable?: boolean;
  compoundingStrategy?: CompoundingStrategy;
  excludeMidPeriodAllocations?: boolean;
  applyOnCancelAtEndOfPeriod?: boolean;
  applyOnSubscriptionExpiration?: boolean;
  [key: string]: unknown;
}

export const createOrUpdateFlatAmountCouponSchema: Schema<CreateOrUpdateFlatAmountCoupon> = expandoObject(
  {
    name: ['name', string()],
    code: ['code', string()],
    description: ['description', optional(string())],
    amountInCents: ['amount_in_cents', bigint()],
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
  }
);
