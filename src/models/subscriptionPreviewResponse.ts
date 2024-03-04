/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  SubscriptionPreview,
  subscriptionPreviewSchema,
} from './subscriptionPreview';

export interface SubscriptionPreviewResponse {
  subscriptionPreview: SubscriptionPreview;
  [key: string]: unknown;
}

export const subscriptionPreviewResponseSchema: Schema<SubscriptionPreviewResponse> = expandoObject(
  {
    subscriptionPreview: [
      'subscription_preview',
      lazy(() => subscriptionPreviewSchema),
    ],
  }
);
