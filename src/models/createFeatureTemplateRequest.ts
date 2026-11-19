/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Feature, featureSchema } from './feature.js';

export interface CreateFeatureTemplateRequest {
  feature: Feature;
  [key: string]: unknown;
}

export const createFeatureTemplateRequestSchema: Schema<CreateFeatureTemplateRequest> = lazy(
  () => expandoObject({ feature: ['feature', featureSchema] })
);
