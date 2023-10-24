/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  SubscriptionProductMigration,
  subscriptionProductMigrationSchema,
} from './subscriptionProductMigration';

export interface SubscriptionProductMigrationRequest {
  migration: SubscriptionProductMigration;
}

export const subscriptionProductMigrationRequestSchema: Schema<SubscriptionProductMigrationRequest> = object(
  { migration: ['migration', lazy(() => subscriptionProductMigrationSchema)] }
);
