/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  SubscriptionMigrationPreview,
  subscriptionMigrationPreviewSchema,
} from './subscriptionMigrationPreview';

export interface SubscriptionMigrationPreviewResponse {
  migration: SubscriptionMigrationPreview;
  [key: string]: unknown;
}

export const subscriptionMigrationPreviewResponseSchema: Schema<SubscriptionMigrationPreviewResponse> = expandoObject(
  { migration: ['migration', lazy(() => subscriptionMigrationPreviewSchema)] }
);
