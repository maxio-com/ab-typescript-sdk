/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';
import {
  CreateOrUpdatePercentageCouponCompoundingStrategy,
  createOrUpdatePercentageCouponCompoundingStrategySchema,
} from './containers/createOrUpdatePercentageCouponCompoundingStrategy';
import {
  CreateOrUpdatePercentageCouponPercentage,
  createOrUpdatePercentageCouponPercentageSchema,
} from './containers/createOrUpdatePercentageCouponPercentage';

export interface CreateOrUpdatePercentageCoupon {
  /** the name of the coupon */
  name: string;
  /** may contain uppercase alphanumeric characters and these special characters (which allow for email addresses to be used): “%”, “@”, “+”, “-”, “_”, and “.” */
  code: string;
  description?: string;
  percentage: CreateOrUpdatePercentageCouponPercentage;
  allowNegativeBalance?: string;
  recurring?: string;
  endDate?: string;
  productFamilyId?: string;
  stackable?: string;
  compoundingStrategy?: CreateOrUpdatePercentageCouponCompoundingStrategy;
  excludeMidPeriodAllocations?: boolean;
  applyOnCancelAtEndOfPeriod?: boolean;
}

export const createOrUpdatePercentageCouponSchema: Schema<CreateOrUpdatePercentageCoupon> = object(
  {
    name: ['name', string()],
    code: ['code', string()],
    description: ['description', optional(string())],
    percentage: ['percentage', createOrUpdatePercentageCouponPercentageSchema],
    allowNegativeBalance: ['allow_negative_balance', optional(string())],
    recurring: ['recurring', optional(string())],
    endDate: ['end_date', optional(string())],
    productFamilyId: ['product_family_id', optional(string())],
    stackable: ['stackable', optional(string())],
    compoundingStrategy: [
      'compounding_strategy',
      optional(createOrUpdatePercentageCouponCompoundingStrategySchema),
    ],
    excludeMidPeriodAllocations: [
      'exclude_mid_period_allocations',
      optional(boolean()),
    ],
    applyOnCancelAtEndOfPeriod: [
      'apply_on_cancel_at_end_of_period',
      optional(boolean()),
    ],
  }
);
