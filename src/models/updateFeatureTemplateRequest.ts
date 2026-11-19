/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Feature1, feature1Schema } from './feature1.js';

export interface UpdateFeatureTemplateRequest {
  /** `key` cannot be changed once set. `kind` cannot be changed once any feature catalog item has been created from this template. */
  feature: Feature1;
  [key: string]: unknown;
}

export const updateFeatureTemplateRequestSchema: Schema<UpdateFeatureTemplateRequest> = lazy(
  () => expandoObject({ feature: ['feature', feature1Schema] })
);
