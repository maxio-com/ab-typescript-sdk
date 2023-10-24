/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  SubscriptionPreview,
  subscriptionPreviewSchema,
} from './subscriptionPreview';

export interface SubscriptionPreviewResponse {
  subscriptionPreview: SubscriptionPreview;
}

export const subscriptionPreviewResponseSchema: Schema<SubscriptionPreviewResponse> = object(
  {
    subscriptionPreview: [
      'subscription_preview',
      lazy(() => subscriptionPreviewSchema),
    ],
  }
);
