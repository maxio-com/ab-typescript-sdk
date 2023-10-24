/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { RenewalPreview, renewalPreviewSchema } from './renewalPreview';

export interface RenewalPreviewResponse {
  renewalPreview: RenewalPreview;
}

export const renewalPreviewResponseSchema: Schema<RenewalPreviewResponse> = object(
  { renewalPreview: ['renewal_preview', lazy(() => renewalPreviewSchema)] }
);
