/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { BillingManifest, billingManifestSchema } from './billingManifest';

export interface SubscriptionPreview {
  currentBillingManifest?: BillingManifest;
  nextBillingManifest?: BillingManifest;
  [key: string]: unknown;
}

export const subscriptionPreviewSchema: Schema<SubscriptionPreview> = expandoObject(
  {
    currentBillingManifest: [
      'current_billing_manifest',
      optional(lazy(() => billingManifestSchema)),
    ],
    nextBillingManifest: [
      'next_billing_manifest',
      optional(lazy(() => billingManifestSchema)),
    ],
  }
);
