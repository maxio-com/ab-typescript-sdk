/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  SubscriptionProductMigration,
  subscriptionProductMigrationSchema,
} from './subscriptionProductMigration.js';

export interface SubscriptionProductMigrationRequest {
  migration: SubscriptionProductMigration;
  [key: string]: unknown;
}

export const subscriptionProductMigrationRequestSchema: Schema<SubscriptionProductMigrationRequest> = lazy(
  () =>
    expandoObject({
      migration: ['migration', subscriptionProductMigrationSchema],
    })
);
