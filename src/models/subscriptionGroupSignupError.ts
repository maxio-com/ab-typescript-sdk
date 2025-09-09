/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  dict,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema.js';
import { PayerError, payerErrorSchema } from './payerError.js';
import {
  SubscriptionGroupSubscriptionError,
  subscriptionGroupSubscriptionErrorSchema,
} from './subscriptionGroupSubscriptionError.js';

export interface SubscriptionGroupSignupError {
  /** Object that as key have subscription position in request subscriptions array and as value subscription errors object. */
  subscriptions?: Record<string, SubscriptionGroupSubscriptionError>;
  payerReference?: string;
  payer?: PayerError;
  subscriptionGroup?: string[];
  paymentProfileId?: string;
  payerId?: string;
  [key: string]: unknown;
}

export const subscriptionGroupSignupErrorSchema: Schema<SubscriptionGroupSignupError> = expandoObject(
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
