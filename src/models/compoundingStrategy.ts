/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CompoundingStrategy
 */
export enum CompoundingStrategy {
  Compound = 'compound',
  Fullprice = 'full-price',
}

/**
 * Schema for CompoundingStrategy
 */
export const compoundingStrategySchema: Schema<CompoundingStrategy> = stringEnum(
  CompoundingStrategy
);
