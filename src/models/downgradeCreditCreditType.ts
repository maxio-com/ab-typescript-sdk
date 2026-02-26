/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for DowngradeCreditCreditType
 */
export enum DowngradeCreditCreditType {
  Full = 'full',
  Prorated = 'prorated',
  None = 'none',
}

/**
 * Schema for DowngradeCreditCreditType
 */
export const downgradeCreditCreditTypeSchema: Schema<DowngradeCreditCreditType> = stringEnum(
  DowngradeCreditCreditType
);
