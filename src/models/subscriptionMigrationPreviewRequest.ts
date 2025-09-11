/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  SubscriptionMigrationPreviewOptions,
  subscriptionMigrationPreviewOptionsSchema,
} from './subscriptionMigrationPreviewOptions.js';

export interface SubscriptionMigrationPreviewRequest {
  migration: SubscriptionMigrationPreviewOptions;
  [key: string]: unknown;
}

export const subscriptionMigrationPreviewRequestSchema: Schema<SubscriptionMigrationPreviewRequest> = expandoObject(
  {
    migration: [
      'migration',
      lazy(() => subscriptionMigrationPreviewOptionsSchema),
    ],
  }
);
