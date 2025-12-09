/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema.js';
import {
  CompoundingStrategy,
  compoundingStrategySchema,
} from './compoundingStrategy.js';
import {
  CreateInvoiceCouponAmount,
  createInvoiceCouponAmountSchema,
} from './containers/createInvoiceCouponAmount.js';
import {
  CreateInvoiceCouponPercentage,
  createInvoiceCouponPercentageSchema,
} from './containers/createInvoiceCouponPercentage.js';
import {
  CreateInvoiceCouponProductFamilyId,
  createInvoiceCouponProductFamilyIdSchema,
} from './containers/createInvoiceCouponProductFamilyId.js';

export interface CreateInvoiceCoupon {
  code?: string;
  subcode?: string;
  percentage?: CreateInvoiceCouponPercentage;
  amount?: CreateInvoiceCouponAmount;
  description?: string;
  productFamilyId?: CreateInvoiceCouponProductFamilyId;
  /** Applicable only to stackable coupons. For `compound`, Percentage-based discounts will be calculated against the remaining price, after prior discounts have been calculated. For `full-price`, Percentage-based discounts will always be calculated against the original item price, before other discounts are applied. */
  compoundingStrategy?: CompoundingStrategy;
  [key: string]: unknown;
}

export const createInvoiceCouponSchema: Schema<CreateInvoiceCoupon> = lazy(() =>
  expandoObject({
    code: ['code', optional(string())],
    subcode: ['subcode', optional(string())],
    percentage: ['percentage', optional(createInvoiceCouponPercentageSchema)],
    amount: ['amount', optional(createInvoiceCouponAmountSchema)],
    description: ['description', optional(string())],
    productFamilyId: [
      'product_family_id',
      optional(createInvoiceCouponProductFamilyIdSchema),
    ],
    compoundingStrategy: [
      'compounding_strategy',
      optional(compoundingStrategySchema),
    ],
  })
);
