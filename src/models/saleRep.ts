/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  number,
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
  [key: string]: unknown;
}

export const saleRepSchema: Schema<SaleRep> = expandoObject({
  id: ['id', optional(number())],
  fullName: ['full_name', optional(string())],
  subscriptionsCount: ['subscriptions_count', optional(number())],
  testMode: ['test_mode', optional(boolean())],
  subscriptions: [
    'subscriptions',
    optional(array(lazy(() => saleRepSubscriptionSchema))),
  ],
});
