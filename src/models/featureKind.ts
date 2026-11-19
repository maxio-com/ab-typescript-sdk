/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for FeatureKind
 */
export enum FeatureKind {
  AccessRight = 'access_right',
  UsageLimit = 'usage_limit',
  ServiceRight = 'service_right',
}

/**
 * Schema for FeatureKind
 */
export const featureKindSchema: Schema<FeatureKind> = stringEnum(FeatureKind);
