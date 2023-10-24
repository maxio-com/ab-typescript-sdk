/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, dict, lazy, object, optional, Schema, string } from '../schema';
import { PayerError, payerErrorSchema } from './payerError';
import {
  SubscriptionGroupSubscriptionError,
  subscriptionGroupSubscriptionErrorSchema,
} from './subscriptionGroupSubscriptionError';

export interface SubscriptionGroupSignupError {
  /** Object that as key have subscription position in request subscriptions array and as value subscription errors object. */
  subscriptions?: Record<string, SubscriptionGroupSubscriptionError>;
  payerReference?: string;
  payer?: PayerError;
  subscriptionGroup?: string[];
  paymentProfileId?: string;
  payerId?: string;
}

export const subscriptionGroupSignupErrorSchema: Schema<SubscriptionGroupSignupError> = object(
  {
    subscriptions: [
      'subscriptions',
      optional(dict(lazy(() => subscriptionGroupSubscriptionErrorSchema))),
    ],
    payerReference: ['payer_reference', optional(string())],
    payer: ['payer', optional(lazy(() => payerErrorSchema))],
    subscriptionGroup: ['subscription_group', optional(array(string()))],
    paymentProfileId: ['payment_profile_id', optional(string())],
    payerId: ['payer_id', optional(string())],
  }
);
