/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ReactivationCharge
 */
export enum ReactivationCharge {
  Prorated = 'prorated',
  Immediate = 'immediate',
  Delayed = 'delayed',
}

/**
 * Schema for ReactivationCharge
 */
export const reactivationChargeSchema: Schema<ReactivationCharge> = stringEnum(
  ReactivationCharge
);
