/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { FeatureTemplate, featureTemplateSchema } from './featureTemplate.js';

export interface FeatureTemplateResponse {
  /** A feature that can be granted to subscribers, defined once at the site level and then attached to products or components. */
  feature: FeatureTemplate;
  [key: string]: unknown;
}

export const featureTemplateResponseSchema: Schema<FeatureTemplateResponse> = lazy(
  () => expandoObject({ feature: ['feature', featureTemplateSchema] })
);
