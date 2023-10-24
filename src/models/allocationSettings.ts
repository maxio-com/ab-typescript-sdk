/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, optional, Schema, string } from '../schema';

export interface AllocationSettings {
  upgradeCharge?: string | null;
  downgradeCredit?: string | null;
  accrueCharge?: boolean;
}

export const allocationSettingsSchema: Schema<AllocationSettings> = object({
  upgradeCharge: ['upgrade_charge', optional(nullable(string()))],
  downgradeCredit: ['downgrade_credit', optional(nullable(string()))],
  accrueCharge: ['accrue_charge', optional(boolean())],
});
