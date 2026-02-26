/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import { BillingSchedule, billingScheduleSchema } from './billingSchedule.js';
import {
  ComponentCustomPrice,
  componentCustomPriceSchema,
} from './componentCustomPrice.js';
import {
  CreateAllocationPricePointId,
  createAllocationPricePointIdSchema,
} from './containers/createAllocationPricePointId.js';
import {
  DowngradeCreditCreditType,
  downgradeCreditCreditTypeSchema,
} from './downgradeCreditCreditType.js';
import {
  UpgradeChargeCreditType,
  upgradeChargeCreditTypeSchema,
} from './upgradeChargeCreditType.js';

export interface CreateAllocation {
  /** The allocated quantity to which to set the line-items allocated quantity. By default, this is an integer. If decimal allocations are enabled for the component, it will be a decimal number. For On/Off components, use 1for on and 0 for off. */
  quantity: number;
  /**
   * Decimal representation of the allocated quantity. Only valid when decimal
   * allocations are enabled for the component.
   */
  decimalQuantity?: string;
  /**
   * The quantity that was in effect before this allocation. Responses always
   * include this value; it may be supplied on preview requests to ensure the
   * expected change is evaluated.
   */
  previousQuantity?: number;
  /**
   * Decimal representation of `previous_quantity`. Only valid when decimal
   * allocations are enabled for the component.
   */
  decimalPreviousQuantity?: string;
  /** (required for the multiple allocations endpoint) The id associated with the component for which the allocation is being made. */
  componentId?: number;
  /** A memo to record along with the allocation. */
  memo?: string;
  /** The scheme used if the proration is a downgrade. Defaults to the site setting if one is not provided. */
  prorationDowngradeScheme?: string;
  /** The scheme used if the proration is an upgrade. Defaults to the site setting if one is not provided. */
  prorationUpgradeScheme?: string;
  /**
   * The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. Values are:
   * `full` -  A full price credit is added for the amount owed.
   * `prorated` - A prorated credit is added for the amount owed.
   * `none` - No charge is added.
   */
  downgradeCredit?: DowngradeCreditCreditType | null;
  /**
   * The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. Values are:
   * `full` - A charge is added for the full price of the component.
   * `prorated` - A charge is added for the prorated price of the component change.
   * `none` - No charge is added.
   */
  upgradeCharge?: UpgradeChargeCreditType | null;
  /**
   * "If the change in cost is an upgrade, this determines if the charge should accrue to the next renewal or if capture should be attempted immediately.
   * `true` - Attempt to charge the customer at the next renewal.
   * `false` - Attempt to charge the customer right away. If it fails, the charge will be accrued until the next renewal.
   * Defaults to the site setting if unspecified in the request.
   */
  accrueCharge?: boolean;
  /**
   * If set to true, if the immediate component payment fails, initiate dunning for the subscription.
   * Otherwise, leave the charges on the subscription to pay for at renewal. Defaults to false.
   */
  initiateDunning?: boolean;
  /** Price point that the allocation should be charged at. Accepts either the price point's id (integer) or handle (string). When not specified, the default price point will be used. */
  pricePointId?: CreateAllocationPricePointId | null;
  /** This attribute is particularly useful when you need to align billing events for different components on distinct schedules within a subscription. This only works for site with Multifrequency enabled. */
  billingSchedule?: BillingSchedule;
  /** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
  customPrice?: ComponentCustomPrice;
  [key: string]: unknown;
}

export const createAllocationSchema: Schema<CreateAllocation> = lazy(() =>
  expandoObject({
    quantity: ['quantity', number()],
    decimalQuantity: ['decimal_quantity', optional(string())],
    previousQuantity: ['previous_quantity', optional(number())],
    decimalPreviousQuantity: ['decimal_previous_quantity', optional(string())],
    componentId: ['component_id', optional(number())],
    memo: ['memo', optional(string())],
    prorationDowngradeScheme: [
      'proration_downgrade_scheme',
      optional(string()),
    ],
    prorationUpgradeScheme: ['proration_upgrade_scheme', optional(string())],
    downgradeCredit: [
      'downgrade_credit',
      optional(nullable(downgradeCreditCreditTypeSchema)),
    ],
    upgradeCharge: [
      'upgrade_charge',
      optional(nullable(upgradeChargeCreditTypeSchema)),
    ],
    accrueCharge: ['accrue_charge', optional(boolean())],
    initiateDunning: ['initiate_dunning', optional(boolean())],
    pricePointId: [
      'price_point_id',
      optional(nullable(createAllocationPricePointIdSchema)),
    ],
    billingSchedule: ['billing_schedule', optional(billingScheduleSchema)],
    customPrice: ['custom_price', optional(componentCustomPriceSchema)],
  })
);
