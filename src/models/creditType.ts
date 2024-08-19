/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CreditType
 */
export enum CreditType {
  Full = 'full',
  Prorated = 'prorated',
  None = 'none',
}

/**
 * Schema for CreditType
 */
export const creditTypeSchema: Schema<CreditType> = stringEnum(CreditType);
