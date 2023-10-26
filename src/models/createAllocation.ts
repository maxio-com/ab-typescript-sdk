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
  CreateAllocationPricePointId,
  createAllocationPricePointIdSchema,
} from './containers/createAllocationPricePointId';
import { CreditType1, creditType1Schema } from './creditType1';

export interface CreateAllocation {
  /** The allocated quantity to which to set the line-items allocated quantity. By default, this is an integer. If decimal allocations are enabled for the component, it will be a decimal number. For On/Off components, use 1for on and 0 for off. */
  quantity: number;
  /** (required for the multiple allocations endpoint) The id associated with the component for which the allocation is being made */
  componentId?: number;
  /** A memo to record along with the allocation */
  memo?: string;
  /** The scheme used if the proration is a downgrade. Defaults to the site setting if one is not provided. */
  prorationDowngradeScheme?: string;
  /** The scheme used if the proration is an upgrade. Defaults to the site setting if one is not provided. */
  prorationUpgradeScheme?: string;
  /** If the change in cost is an upgrade, this determines if the charge should accrue to the next renewal or if capture should be attempted immediately. Defaults to the site setting if one is not provided. */
  accrueCharge?: boolean;
  /** The type of credit to be created if the change in cost is a downgrade. Defaults to the component and then site setting if one is not provided. */
  downgradeCredit?: CreditType1;
  /** The type of charge to be created if the change in cost is an upgrade. Defaults to the component and then site setting if one is not provided. */
  upgradeCharge?: CreditType1;
  /** Price point that the allocation should be charged at. Accepts either the price point's id (integer) or handle (string). When not specified, the default price point will be used. */
  pricePointId?: CreateAllocationPricePointId | null;
}

export const createAllocationSchema: Schema<CreateAllocation> = object({
  quantity: ['quantity', number()],
  componentId: ['component_id', optional(number())],
  memo: ['memo', optional(string())],
  prorationDowngradeScheme: ['proration_downgrade_scheme', optional(string())],
  prorationUpgradeScheme: ['proration_upgrade_scheme', optional(string())],
  accrueCharge: ['accrue_charge', optional(boolean())],
  downgradeCredit: ['downgrade_credit', optional(creditType1Schema)],
  upgradeCharge: ['upgrade_charge', optional(creditType1Schema)],
  pricePointId: [
    'price_point_id',
    optional(nullable(createAllocationPricePointIdSchema)),
  ],
});
