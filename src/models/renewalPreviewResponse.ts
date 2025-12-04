/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { RenewalPreview, renewalPreviewSchema } from './renewalPreview.js';

export interface RenewalPreviewResponse {
  renewalPreview: RenewalPreview;
  [key: string]: unknown;
}

export const renewalPreviewResponseSchema: Schema<RenewalPreviewResponse> = lazy(
  () =>
    expandoObject({ renewalPreview: ['renewal_preview', renewalPreviewSchema] })
);
