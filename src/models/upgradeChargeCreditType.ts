/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for UpgradeChargeCreditType
 */
export enum UpgradeChargeCreditType {
  Full = 'full',
  Prorated = 'prorated',
  None = 'none',
}

/**
 * Schema for UpgradeChargeCreditType
 */
export const upgradeChargeCreditTypeSchema: Schema<UpgradeChargeCreditType> = stringEnum(
  UpgradeChargeCreditType
);
