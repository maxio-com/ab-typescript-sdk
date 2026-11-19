/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Feature2, feature2Schema } from './feature2.js';

/** The owning product or component is taken from the URL and must not be included in the request body. */
export interface CreateFeatureCatalogItemRequest {
  feature: Feature2;
  [key: string]: unknown;
}

export const createFeatureCatalogItemRequestSchema: Schema<CreateFeatureCatalogItemRequest> = lazy(
  () => expandoObject({ feature: ['feature', feature2Schema] })
);
