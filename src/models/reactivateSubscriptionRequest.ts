/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import {
  ReactivateSubscriptionRequestResume,
  reactivateSubscriptionRequestResumeSchema,
} from './containers/reactivateSubscriptionRequestResume';
import {
  ReactivationBilling,
  reactivationBillingSchema,
} from './reactivationBilling';

export interface ReactivateSubscriptionRequest {
  /** These values are only applicable to subscriptions using calendar billing */
  calendarBilling?: ReactivationBilling;
  /** If `true` is sent, the reactivated Subscription will include a trial if one is available. If `false` is sent, the trial period will be ignored. */
  includeTrial?: boolean;
  /** If `true` is passed, the existing subscription balance will NOT be cleared/reset before adding the additional reactivation charges. */
  preserveBalance?: boolean;
  /** The coupon code to be applied during reactivation. */
  couponCode?: string;
  /** If true is sent, Chargify will use service credits and prepayments upon reactivation. If false is sent, the service credits and prepayments will be ignored. */
  useCreditsAndPrepayments?: boolean;
  /** If `true`, Chargify will attempt to resume the subscription's billing period. if not resumable, the subscription will be reactivated with a new billing period. If `false`: Chargify will only attempt to reactivate the subscription. */
  resume?: ReactivateSubscriptionRequestResume;
}

export const reactivateSubscriptionRequestSchema: Schema<ReactivateSubscriptionRequest> = object(
  {
    calendarBilling: [
      'calendar_billing',
      optional(lazy(() => reactivationBillingSchema)),
    ],
    includeTrial: ['include_trial', optional(boolean())],
    preserveBalance: ['preserve_balance', optional(boolean())],
    couponCode: ['coupon_code', optional(string())],
    useCreditsAndPrepayments: [
      'use_credits_and_prepayments',
      optional(boolean()),
    ],
    resume: ['resume', optional(reactivateSubscriptionRequestResumeSchema)],
  }
);
