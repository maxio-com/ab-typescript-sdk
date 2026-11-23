/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for FeatureValueType
 */
export enum FeatureValueType {
  Text = 'text',
  Boolean = 'boolean',
  Numeric = 'numeric',
}

/**
 * Schema for FeatureValueType
 */
export const featureValueTypeSchema: Schema<FeatureValueType> = stringEnum(
  FeatureValueType
);
