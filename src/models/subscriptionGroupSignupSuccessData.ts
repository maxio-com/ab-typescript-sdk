/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, number, object, Schema, string } from '../schema';

export interface SubscriptionGroupSignupSuccessData {
  uid: string;
  scheme: number;
  customerId: number;
  paymentProfileId: number;
  subscriptionIds: number[];
  primarySubscriptionId: number;
  nextAssessmentAt: string;
  state: string;
  cancelAtEndOfPeriod: boolean;
}

export const subscriptionGroupSignupSuccessDataSchema: Schema<SubscriptionGroupSignupSuccessData> = object(
  {
    uid: ['uid', string()],
    scheme: ['scheme', number()],
    customerId: ['customer_id', number()],
    paymentProfileId: ['payment_profile_id', number()],
    subscriptionIds: ['subscription_ids', array(number())],
    primarySubscriptionId: ['primary_subscription_id', number()],
    nextAssessmentAt: ['next_assessment_at', string()],
    state: ['state', string()],
    cancelAtEndOfPeriod: ['cancel_at_end_of_period', boolean()],
  }
);
