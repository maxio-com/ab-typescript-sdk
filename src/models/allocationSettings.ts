/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, optional, Schema } from '../schema';
import { CreditType, creditTypeSchema } from './creditType';

export interface AllocationSettings {
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
  accrueCharge?: boolean;
}

export const allocationSettingsSchema: Schema<AllocationSettings> = object({
  upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
  downgradeCredit: ['downgrade_credit', optional(nullable(creditTypeSchema))],
  accrueCharge: ['accrue_charge', optional(boolean())],
});
