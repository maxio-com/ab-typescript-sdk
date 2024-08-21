/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RestrictionType
 */
export enum RestrictionType {
  Component = 'Component',
  Product = 'Product',
}

/**
 * Schema for RestrictionType
 */
export const restrictionTypeSchema: Schema<RestrictionType> = stringEnum(
  RestrictionType
);
