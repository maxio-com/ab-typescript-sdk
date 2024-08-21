/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CreditScheme
 */
export enum CreditScheme {
  None = 'none',
  Credit = 'credit',
  Refund = 'refund',
}

/**
 * Schema for CreditScheme
 */
export const creditSchemeSchema: Schema<CreditScheme> = stringEnum(
  CreditScheme
);
