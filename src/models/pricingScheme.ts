/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PricingScheme
 */
export enum PricingScheme {
  Stairstep = 'stairstep',
  Volume = 'volume',
  PerUnit = 'per_unit',
  Tiered = 'tiered',
}

/**
 * Schema for PricingScheme
 */
export const pricingSchemeSchema: Schema<PricingScheme> = stringEnum(
  PricingScheme
);
