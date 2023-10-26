/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CreditType1
 */
export enum CreditType1 {
  Full = 'full',
  Prorated = 'prorated',
  None = 'none',
}

/**
 * Schema for CreditType1
 */
export const creditType1Schema: Schema<CreditType1> = stringEnum(CreditType1);
