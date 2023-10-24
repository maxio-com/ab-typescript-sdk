/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  CreateInvoiceCouponAmount,
  createInvoiceCouponAmountSchema,
} from './containers/createInvoiceCouponAmount';
import {
  CreateInvoiceCouponCompoundingStrategy,
  createInvoiceCouponCompoundingStrategySchema,
} from './containers/createInvoiceCouponCompoundingStrategy';
import {
  CreateInvoiceCouponPercentage,
  createInvoiceCouponPercentageSchema,
} from './containers/createInvoiceCouponPercentage';
import {
  CreateInvoiceCouponProductFamilyId,
  createInvoiceCouponProductFamilyIdSchema,
} from './containers/createInvoiceCouponProductFamilyId';

export interface CreateInvoiceCoupon {
  code?: string;
  percentage?: CreateInvoiceCouponPercentage;
  amount?: CreateInvoiceCouponAmount;
  description?: string;
  productFamilyId?: CreateInvoiceCouponProductFamilyId;
  compoundingStrategy?: CreateInvoiceCouponCompoundingStrategy;
}

export const createInvoiceCouponSchema: Schema<CreateInvoiceCoupon> = object({
  code: ['code', optional(string())],
  percentage: [
    'percentage',
    optional(lazy(() => createInvoiceCouponPercentageSchema)),
  ],
  amount: ['amount', optional(lazy(() => createInvoiceCouponAmountSchema))],
  description: ['description', optional(string())],
  productFamilyId: [
    'product_family_id',
    optional(lazy(() => createInvoiceCouponProductFamilyIdSchema)),
  ],
  compoundingStrategy: [
    'compounding_strategy',
    optional(createInvoiceCouponCompoundingStrategySchema),
  ],
});
