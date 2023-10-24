/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { BillingManifest, billingManifestSchema } from './billingManifest';

export interface SubscriptionPreview {
  currentBillingManifest?: BillingManifest;
  nextBillingManifest?: BillingManifest;
}

export const subscriptionPreviewSchema: Schema<SubscriptionPreview> = object({
  currentBillingManifest: [
    'current_billing_manifest',
    optional(lazy(() => billingManifestSchema)),
  ],
  nextBillingManifest: [
    'next_billing_manifest',
    optional(lazy(() => billingManifestSchema)),
  ],
});
