/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AllocationPreviewItemPreviousQuantity,
  allocationPreviewItemPreviousQuantitySchema,
} from './containers/allocationPreviewItemPreviousQuantity';
import {
  AllocationPreviewItemQuantity,
  allocationPreviewItemQuantitySchema,
} from './containers/allocationPreviewItemQuantity';
import { CreditType, creditTypeSchema } from './creditType';

export interface AllocationPreviewItem {
  componentId?: number;
  subscriptionId?: number;
  quantity?: AllocationPreviewItemQuantity;
  previousQuantity?: AllocationPreviewItemPreviousQuantity;
  memo?: string | null;
  timestamp?: string | null;
  prorationUpgradeScheme?: string;
  prorationDowngradeScheme?: string;
  accrueCharge?: boolean;
  /**
   * The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.
   * Available values: `full`, `prorated`, `none`.
   */
  upgradeCharge?: CreditType | null;
  /**
   * The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.
   * Available values: `full`, `prorated`, `none`.
   */
  downgradeCredit?: CreditType | null;
  pricePointId?: number;
  previousPricePointId?: number;
  pricePointHandle?: string;
  pricePointName?: string;
  componentHandle?: string | null;
}

export const allocationPreviewItemSchema: Schema<AllocationPreviewItem> = object(
  {
    componentId: ['component_id', optional(number())],
    subscriptionId: ['subscription_id', optional(number())],
    quantity: ['quantity', optional(allocationPreviewItemQuantitySchema)],
    previousQuantity: [
      'previous_quantity',
      optional(allocationPreviewItemPreviousQuantitySchema),
    ],
    memo: ['memo', optional(nullable(string()))],
    timestamp: ['timestamp', optional(nullable(string()))],
    prorationUpgradeScheme: ['proration_upgrade_scheme', optional(string())],
    prorationDowngradeScheme: [
      'proration_downgrade_scheme',
      optional(string()),
    ],
    accrueCharge: ['accrue_charge', optional(boolean())],
    upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
    downgradeCredit: ['downgrade_credit', optional(nullable(creditTypeSchema))],
    pricePointId: ['price_point_id', optional(number())],
    previousPricePointId: ['previous_price_point_id', optional(number())],
    pricePointHandle: ['price_point_handle', optional(string())],
    pricePointName: ['price_point_name', optional(string())],
    componentHandle: ['component_handle', optional(nullable(string()))],
  }
);
