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
  AllocationPayment,
  allocationPaymentSchema,
} from './containers/allocationPayment';
import {
  AllocationPreviousQuantity,
  allocationPreviousQuantitySchema,
} from './containers/allocationPreviousQuantity';
import {
  AllocationQuantity,
  allocationQuantitySchema,
} from './containers/allocationQuantity';
import { CreditType, creditTypeSchema } from './creditType';

export interface Allocation {
  /** The allocation unique id */
  allocationId?: number;
  /** The integer component ID for the allocation. This references a component that you have created in your Product setup */
  componentId?: number;
  /** The handle of the component. This references a component that you have created in your Product setup */
  componentHandle?: string | null;
  /** The integer subscription ID for the allocation. This references a unique subscription in your Site */
  subscriptionId?: number;
  /** The allocated quantity set in to effect by the allocation. String for components supporting fractional quantities */
  quantity?: AllocationQuantity;
  /** The allocated quantity that was in effect before this allocation was created. String for components supporting fractional quantities */
  previousQuantity?: AllocationPreviousQuantity;
  /** The memo passed when the allocation was created */
  memo?: string | null;
  /** The time that the allocation was recorded, in format and UTC timezone, i.e. 2012-11-20T22:00:37Z */
  timestamp?: string;
  /** Timestamp indicating when this allocation was created */
  createdAt?: string;
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
  /**
   * If true, if the immediate component payment fails, initiate dunning for the subscription.
   * Otherwise, leave the charges on the subscription to pay for at renewal.
   */
  initiateDunning?: boolean;
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
  payment?: AllocationPayment | null;
}

export const allocationSchema: Schema<Allocation> = object({
  allocationId: ['allocation_id', optional(number())],
  componentId: ['component_id', optional(number())],
  componentHandle: ['component_handle', optional(nullable(string()))],
  subscriptionId: ['subscription_id', optional(number())],
  quantity: ['quantity', optional(allocationQuantitySchema)],
  previousQuantity: [
    'previous_quantity',
    optional(allocationPreviousQuantitySchema),
  ],
  memo: ['memo', optional(nullable(string()))],
  timestamp: ['timestamp', optional(string())],
  createdAt: ['created_at', optional(string())],
  prorationUpgradeScheme: ['proration_upgrade_scheme', optional(string())],
  prorationDowngradeScheme: ['proration_downgrade_scheme', optional(string())],
  pricePointId: ['price_point_id', optional(number())],
  pricePointName: ['price_point_name', optional(string())],
  pricePointHandle: ['price_point_handle', optional(string())],
  previousPricePointId: ['previous_price_point_id', optional(number())],
  accrueCharge: ['accrue_charge', optional(boolean())],
  initiateDunning: ['initiate_dunning', optional(boolean())],
  upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
  downgradeCredit: ['downgrade_credit', optional(nullable(creditTypeSchema))],
  payment: ['payment', optional(nullable(lazy(() => allocationPaymentSchema)))],
});
