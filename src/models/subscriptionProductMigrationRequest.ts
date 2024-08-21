/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  SubscriptionProductMigration,
  subscriptionProductMigrationSchema,
} from './subscriptionProductMigration';

export interface SubscriptionProductMigrationRequest {
  migration: SubscriptionProductMigration;
  [key: string]: unknown;
}

export const subscriptionProductMigrationRequestSchema: Schema<SubscriptionProductMigrationRequest> = expandoObject(
  { migration: ['migration', lazy(() => subscriptionProductMigrationSchema)] }
);
