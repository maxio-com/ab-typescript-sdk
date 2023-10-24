/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';
import {
  CreateOrUpdateFlatAmountCouponCompoundingStrategy,
  createOrUpdateFlatAmountCouponCompoundingStrategySchema,
} from './containers/createOrUpdateFlatAmountCouponCompoundingStrategy';

export interface CreateOrUpdateFlatAmountCoupon {
  /** the name of the coupon */
  name: string;
  /** may contain uppercase alphanumeric characters and these special characters (which allow for email addresses to be used): “%”, “@”, “+”, “-”, “_”, and “.” */
  code: string;
  description?: string;
  amountInCents: number;
  allowNegativeBalance?: string;
  recurring?: string;
  endDate?: string;
  productFamilyId?: string;
  stackable?: string;
  compoundingStrategy?: CreateOrUpdateFlatAmountCouponCompoundingStrategy;
  excludeMidPeriodAllocations?: boolean;
  applyOnCancelAtEndOfPeriod?: boolean;
}

export const createOrUpdateFlatAmountCouponSchema: Schema<CreateOrUpdateFlatAmountCoupon> = object(
  {
    name: ['name', string()],
    code: ['code', string()],
    description: ['description', optional(string())],
    amountInCents: ['amount_in_cents', number()],
    allowNegativeBalance: ['allow_negative_balance', optional(string())],
    recurring: ['recurring', optional(string())],
    endDate: ['end_date', optional(string())],
    productFamilyId: ['product_family_id', optional(string())],
    stackable: ['stackable', optional(string())],
    compoundingStrategy: [
      'compounding_strategy',
      optional(createOrUpdateFlatAmountCouponCompoundingStrategySchema),
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
