/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for FirstChargeType
 */
export enum FirstChargeType {
  Prorated = 'prorated',
  Immediate = 'immediate',
  Delayed = 'delayed',
}

/**
 * Schema for FirstChargeType
 */
export const firstChargeTypeSchema: Schema<FirstChargeType> = stringEnum(
  FirstChargeType
);
