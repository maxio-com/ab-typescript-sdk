/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  SubscriptionPreview,
  subscriptionPreviewSchema,
} from './subscriptionPreview.js';

export interface SubscriptionPreviewResponse {
  subscriptionPreview: SubscriptionPreview;
  [key: string]: unknown;
}

export const subscriptionPreviewResponseSchema: Schema<SubscriptionPreviewResponse> = lazy(
  () =>
    expandoObject({
      subscriptionPreview: ['subscription_preview', subscriptionPreviewSchema],
    })
);
