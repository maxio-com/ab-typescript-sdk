/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AllocationPayment2,
  allocationPayment2Schema,
} from './containers/allocationPayment2';

export interface Allocation {
  /** The integer component ID for the allocation. This references a component that you have created in your Product setup */
  componentId?: number;
  /** The integer subscription ID for the allocation. This references a unique subscription in your Site */
  subscriptionId?: number;
  /** The allocated quantity set in to effect by the allocation */
  quantity?: number;
  /** The allocated quantity that was in effect before this allocation was created */
  previousQuantity?: number;
  /** The memo passed when the allocation was created */
  memo?: string | null;
  /** The time that the allocation was recorded, in  format and UTC timezone, i.e. 2012-11-20T22:00:37Z */
  timestamp?: string;
  /** The scheme used if the proration was an upgrade. This is only present when the allocation was created mid-period. */
  prorationUpgradeScheme?: string;
  /** The scheme used if the proration was a downgrade. This is only present when the allocation was created mid-period. */
  prorationDowngradeScheme?: string;
  pricePointId?: number;
  pricePointName?: string;
  pricePointHandle?: string;
  previousPricePointId?: number;
  /** If the change in cost is an upgrade, this determines if the charge should accrue to the next renewal or if capture should be attempted immediately. */
  accrueCharge?: boolean;
  /** The type of charge to be created if the change in cost is an upgrade. */
  upgradeCharge?: string;
  /** The type of credit to be created if the change in cost is a downgrade. */
  downgradeCredit?: string;
  payment?: AllocationPayment2 | null;
}

export const allocationSchema: Schema<Allocation> = object({
  componentId: ['component_id', optional(number())],
  subscriptionId: ['subscription_id', optional(number())],
  quantity: ['quantity', optional(number())],
  previousQuantity: ['previous_quantity', optional(number())],
  memo: ['memo', optional(nullable(string()))],
  timestamp: ['timestamp', optional(string())],
  prorationUpgradeScheme: ['proration_upgrade_scheme', optional(string())],
  prorationDowngradeScheme: ['proration_downgrade_scheme', optional(string())],
  pricePointId: ['price_point_id', optional(number())],
  pricePointName: ['price_point_name', optional(string())],
  pricePointHandle: ['price_point_handle', optional(string())],
  previousPricePointId: ['previous_price_point_id', optional(number())],
  accrueCharge: ['accrue_charge', optional(boolean())],
  upgradeCharge: ['upgrade_charge', optional(string())],
  downgradeCredit: ['downgrade_credit', optional(string())],
  payment: [
    'payment',
    optional(nullable(lazy(() => allocationPayment2Schema))),
  ],
});
