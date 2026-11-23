/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, number, Schema } from '../schema.js';
import { FeatureTemplate, featureTemplateSchema } from './featureTemplate.js';

export interface FeatureTemplatesListResponse {
  items: FeatureTemplate[];
  /** Total number of feature templates matching the filters, across all pages. */
  totalCount: number;
  /** Number of archived feature templates matching the filters. Returned as `0` unless the active result set is empty or `status=archived` was requested. */
  archivedCount: number;
  [key: string]: unknown;
}

export const featureTemplatesListResponseSchema: Schema<FeatureTemplatesListResponse> = lazy(
  () =>
    expandoObject({
      items: ['items', array(featureTemplateSchema)],
      totalCount: ['total_count', number()],
      archivedCount: ['archived_count', number()],
    })
);
