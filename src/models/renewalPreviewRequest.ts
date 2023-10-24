/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  RenewalPreviewComponent,
  renewalPreviewComponentSchema,
} from './renewalPreviewComponent';

export interface RenewalPreviewRequest {
  /** An optional array of component definitions to preview. Providing any component definitions here will override the actual components on the subscription (and their quantities), and the billing preview will contain only these components (in addition to any product base fees). */
  components?: RenewalPreviewComponent[];
}

export const renewalPreviewRequestSchema: Schema<RenewalPreviewRequest> = object(
  {
    components: [
      'components',
      optional(array(lazy(() => renewalPreviewComponentSchema))),
    ],
  }
);
