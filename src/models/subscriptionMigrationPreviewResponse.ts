/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  SubscriptionMigrationPreview,
  subscriptionMigrationPreviewSchema,
} from './subscriptionMigrationPreview';

export interface SubscriptionMigrationPreviewResponse {
  migration: SubscriptionMigrationPreview;
}

export const subscriptionMigrationPreviewResponseSchema: Schema<SubscriptionMigrationPreviewResponse> = object(
  { migration: ['migration', lazy(() => subscriptionMigrationPreviewSchema)] }
);
