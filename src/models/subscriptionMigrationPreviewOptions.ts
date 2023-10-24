/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Proration, prorationSchema } from './proration';

export interface SubscriptionMigrationPreviewOptions {
  /** The ID of the target Product. Either a product_id or product_handle must be present. A Subscription can be migrated to another product for both the current Product Family and another Product Family. Note: Going to another Product Family, components will not be migrated as well. */
  productId?: number;
  /** The ID of the specified product's price point. This can be passed to migrate to a non-default price point. */
  productPricePointId?: number;
  /** Whether to include the trial period configured for the product price point when starting a new billing period. Note that if preserve_period is set, then include_trial will be ignored. */
  includeTrial?: boolean;
  /** If `true` is sent initial charges will be assessed. */
  includeInitialCharge?: boolean;
  /** If `true` is sent, any coupons associated with the subscription will be applied to the migration. If `false` is sent, coupons will not be applied. Note: When migrating to a new product family, the coupon cannot migrate. */
  includeCoupons?: boolean;
  /** If `false` is sent, the subscription's billing period will be reset to today and the full price of the new product will be charged. If `true` is sent, the billing period will not change and a prorated charge will be issued for the new product. */
  preservePeriod?: boolean;
  /** The handle of the target Product. Either a product_id or product_handle must be present. A Subscription can be migrated to another product for both the current Product Family and another Product Family. Note: Going to another Product Family, components will not be migrated as well. */
  productHandle?: string;
  /** The ID or handle of the specified product's price point. This can be passed to migrate to a non-default price point. */
  productPricePointHandle?: string;
  proration?: Proration;
  /** The date that the proration is calculated from for the preview */
  prorationDate?: string;
}

export const subscriptionMigrationPreviewOptionsSchema: Schema<SubscriptionMigrationPreviewOptions> = object(
  {
    productId: ['product_id', optional(number())],
    productPricePointId: ['product_price_point_id', optional(number())],
    includeTrial: ['include_trial', optional(boolean())],
    includeInitialCharge: ['include_initial_charge', optional(boolean())],
    includeCoupons: ['include_coupons', optional(boolean())],
    preservePeriod: ['preserve_period', optional(boolean())],
    productHandle: ['product_handle', optional(string())],
    productPricePointHandle: ['product_price_point_handle', optional(string())],
    proration: ['proration', optional(lazy(() => prorationSchema))],
    prorationDate: ['proration_date', optional(string())],
  }
);
