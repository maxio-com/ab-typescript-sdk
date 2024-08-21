/**
 * AdvancedBilling
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
import { CollectionMethod, collectionMethodSchema } from './collectionMethod';
import {
  SubscriptionGroupPaymentProfile,
  subscriptionGroupPaymentProfileSchema,
} from './subscriptionGroupPaymentProfile';

export interface SubscriptionGroup {
  customerId?: number;
  paymentProfile?: SubscriptionGroupPaymentProfile;
  /** The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`. */
  paymentCollectionMethod?: CollectionMethod;
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
    paymentCollectionMethod: [
      'payment_collection_method',
      optional(collectionMethodSchema),
    ],
    subscriptionIds: ['subscription_ids', optional(array(number()))],
    createdAt: ['created_at', optional(string())],
  }
);
