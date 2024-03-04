/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  SubscriptionGroupPaymentProfile,
  subscriptionGroupPaymentProfileSchema,
} from './subscriptionGroupPaymentProfile';

export interface SubscriptionGroup {
  customerId?: number;
  paymentProfile?: SubscriptionGroupPaymentProfile;
  paymentCollectionMethod?: string;
  subscriptionIds?: number[];
  createdAt?: string;
  [key: string]: unknown;
}

export const subscriptionGroupSchema: Schema<SubscriptionGroup> = expandoObject(
  {
    customerId: ['customer_id', optional(number())],
    paymentProfile: [
      'payment_profile',
      optional(lazy(() => subscriptionGroupPaymentProfileSchema)),
    ],
    paymentCollectionMethod: ['payment_collection_method', optional(string())],
    subscriptionIds: ['subscription_ids', optional(array(number()))],
    createdAt: ['created_at', optional(string())],
  }
);
