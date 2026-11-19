/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for FeatureOwnerPricePointType
 */
export enum FeatureOwnerPricePointType {
  ProductPricePoint = 'ProductPricePoint',
  PricePoint = 'PricePoint',
}

/**
 * Schema for FeatureOwnerPricePointType
 */
export const featureOwnerPricePointTypeSchema: Schema<FeatureOwnerPricePointType> = stringEnum(
  FeatureOwnerPricePointType
);
