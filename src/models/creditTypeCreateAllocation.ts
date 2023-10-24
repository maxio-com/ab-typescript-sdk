/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CreditTypeCreateAllocation
 */
export enum CreditTypeCreateAllocation {
  Full = 'full',
  Prorated = 'prorated',
  None = 'none',
}

/**
 * Schema for CreditTypeCreateAllocation
 */
export const creditTypeCreateAllocationSchema: Schema<CreditTypeCreateAllocation> = stringEnum(CreditTypeCreateAllocation);
