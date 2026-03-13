/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';
import { CreditType, creditTypeSchema } from './creditType.js';

export interface AllocationSettings {
  /** The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. */
  upgradeCharge?: CreditType | null;
  /** The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. */
  downgradeCredit?: CreditType | null;
  /** Either "true" or "false". */
  accrueCharge?: string;
  [key: string]: unknown;
}

export const allocationSettingsSchema: Schema<AllocationSettings> = expandoObject(
  {
    upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
    downgradeCredit: ['downgrade_credit', optional(nullable(creditTypeSchema))],
    accrueCharge: ['accrue_charge', optional(string())],
  }
);
