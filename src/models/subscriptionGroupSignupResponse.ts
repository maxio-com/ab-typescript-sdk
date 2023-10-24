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
  PaymentCollectionMethod,
  paymentCollectionMethodSchema,
} from './paymentCollectionMethod';
import {
  SubscriptionGroupItem,
  subscriptionGroupItemSchema,
} from './subscriptionGroupItem';

export interface SubscriptionGroupSignupResponse {
  uid?: string;
  scheme?: number;
  customerId?: number;
  paymentProfileId?: number;
  subscriptionIds?: number[];
  primarySubscriptionId?: number;
  nextAssessmentAt?: string;
  state?: string;
  cancelAtEndOfPeriod?: boolean;
  subscriptions?: SubscriptionGroupItem[];
  /** The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`. */
  paymentCollectionMethod?: PaymentCollectionMethod;
}

export const subscriptionGroupSignupResponseSchema: Schema<SubscriptionGroupSignupResponse> = object(
  {
    uid: ['uid', optional(string())],
    scheme: ['scheme', optional(number())],
    customerId: ['customer_id', optional(number())],
    paymentProfileId: ['payment_profile_id', optional(number())],
    subscriptionIds: ['subscription_ids', optional(array(number()))],
    primarySubscriptionId: ['primary_subscription_id', optional(number())],
    nextAssessmentAt: ['next_assessment_at', optional(string())],
    state: ['state', optional(string())],
    cancelAtEndOfPeriod: ['cancel_at_end_of_period', optional(boolean())],
    subscriptions: [
      'subscriptions',
      optional(array(lazy(() => subscriptionGroupItemSchema))),
    ],
    paymentCollectionMethod: [
      'payment_collection_method',
      optional(paymentCollectionMethodSchema),
    ],
  }
);
