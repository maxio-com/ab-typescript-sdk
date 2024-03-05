/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { RenewalPreview, renewalPreviewSchema } from './renewalPreview';

export interface RenewalPreviewResponse {
  renewalPreview: RenewalPreview;
  [key: string]: unknown;
}

export const renewalPreviewResponseSchema: Schema<RenewalPreviewResponse> = expandoObject(
  { renewalPreview: ['renewal_preview', lazy(() => renewalPreviewSchema)] }
);
