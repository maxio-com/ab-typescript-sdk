/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PricingScheme1
 */
export enum PricingScheme1 {
  Stairstep = 'stairstep',
  Volume = 'volume',
  PerUnit = 'per_unit',
  Tiered = 'tiered',
}

/**
 * Schema for PricingScheme1
 */
export const pricingScheme1Schema: Schema<PricingScheme1> = stringEnum(PricingScheme1);
