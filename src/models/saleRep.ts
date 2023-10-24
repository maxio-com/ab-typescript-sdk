/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  SaleRepSubscription,
  saleRepSubscriptionSchema,
} from './saleRepSubscription';

export interface SaleRep {
  id?: number;
  fullName?: string;
  subscriptionsCount?: number;
  testMode?: boolean;
  subscriptions?: SaleRepSubscription[];
}

export const saleRepSchema: Schema<SaleRep> = object({
  id: ['id', optional(number())],
  fullName: ['full_name', optional(string())],
  subscriptionsCount: ['subscriptions_count', optional(number())],
  testMode: ['test_mode', optional(boolean())],
  subscriptions: [
    'subscriptions',
    optional(array(lazy(() => saleRepSubscriptionSchema))),
  ],
});
