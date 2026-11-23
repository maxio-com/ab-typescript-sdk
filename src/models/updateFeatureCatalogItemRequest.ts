/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Feature3, feature3Schema } from './feature3.js';

export interface UpdateFeatureCatalogItemRequest {
  feature: Feature3;
  [key: string]: unknown;
}

export const updateFeatureCatalogItemRequestSchema: Schema<UpdateFeatureCatalogItemRequest> = lazy(
  () => expandoObject({ feature: ['feature', feature3Schema] })
);
