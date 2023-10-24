/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  SubscriptionMigrationPreviewOptions,
  subscriptionMigrationPreviewOptionsSchema,
} from './subscriptionMigrationPreviewOptions';

export interface SubscriptionMigrationPreviewRequest {
  migration: SubscriptionMigrationPreviewOptions;
}

export const subscriptionMigrationPreviewRequestSchema: Schema<SubscriptionMigrationPreviewRequest> = object(
  {
    migration: [
      'migration',
      lazy(() => subscriptionMigrationPreviewOptionsSchema),
    ],
  }
);
