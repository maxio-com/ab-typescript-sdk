/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  SubscriptionMigrationPreview,
  subscriptionMigrationPreviewSchema,
} from './subscriptionMigrationPreview.js';

export interface SubscriptionMigrationPreviewResponse {
  migration: SubscriptionMigrationPreview;
  [key: string]: unknown;
}

export const subscriptionMigrationPreviewResponseSchema: Schema<SubscriptionMigrationPreviewResponse> = expandoObject(
  { migration: ['migration', lazy(() => subscriptionMigrationPreviewSchema)] }
);
