/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  CompoundingStrategy,
  compoundingStrategySchema,
} from './compoundingStrategy';
import {
  CreateInvoiceCouponAmount,
  createInvoiceCouponAmountSchema,
} from './containers/createInvoiceCouponAmount';
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
  compoundingStrategy?: CompoundingStrategy;
  [key: string]: unknown;
}

export const createInvoiceCouponSchema: Schema<CreateInvoiceCoupon> = expandoObject(
  {
    code: ['code', optional(string())],
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
  }
);
