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

export interface AllocationPreviewItem {
  componentId?: number;
  subscriptionId?: number;
  quantity?: number;
  previousQuantity?: number;
  memo?: string;
  timestamp?: string | null;
  prorationUpgradeScheme?: string;
  prorationDowngradeScheme?: string;
  accrueCharge?: boolean;
  upgradeCharge?: string;
  downgradeCredit?: string;
  pricePointId?: number;
  previousPricePointId?: number;
  componentHandle?: string;
}

export const allocationPreviewItemSchema: Schema<AllocationPreviewItem> = object(
  {
    componentId: ['component_id', optional(number())],
    subscriptionId: ['subscription_id', optional(number())],
    quantity: ['quantity', optional(number())],
    previousQuantity: ['previous_quantity', optional(number())],
    memo: ['memo', optional(string())],
    timestamp: ['timestamp', optional(nullable(string()))],
    prorationUpgradeScheme: ['proration_upgrade_scheme', optional(string())],
    prorationDowngradeScheme: [
      'proration_downgrade_scheme',
      optional(string()),
    ],
    accrueCharge: ['accrue_charge', optional(boolean())],
    upgradeCharge: ['upgrade_charge', optional(string())],
    downgradeCredit: ['downgrade_credit', optional(string())],
    pricePointId: ['price_point_id', optional(number())],
    previousPricePointId: ['previous_price_point_id', optional(number())],
    componentHandle: ['component_handle', optional(string())],
  }
);
