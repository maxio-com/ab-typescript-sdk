/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';
import {
  SubscriptionCustomPriceExpirationInterval,
  subscriptionCustomPriceExpirationIntervalSchema,
} from './containers/subscriptionCustomPriceExpirationInterval';
import {
  SubscriptionCustomPriceInitialChargeInCents,
  subscriptionCustomPriceInitialChargeInCentsSchema,
} from './containers/subscriptionCustomPriceInitialChargeInCents';
import {
  SubscriptionCustomPriceInterval,
  subscriptionCustomPriceIntervalSchema,
} from './containers/subscriptionCustomPriceInterval';
import {
  SubscriptionCustomPricePriceInCents,
  subscriptionCustomPricePriceInCentsSchema,
} from './containers/subscriptionCustomPricePriceInCents';
import {
  SubscriptionCustomPriceTrialInterval,
  subscriptionCustomPriceTrialIntervalSchema,
} from './containers/subscriptionCustomPriceTrialInterval';
import {
  SubscriptionCustomPriceTrialPriceInCents,
  subscriptionCustomPriceTrialPriceInCentsSchema,
} from './containers/subscriptionCustomPriceTrialPriceInCents';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';

/** (Optional) Used in place of `product_price_point_id` to define a custom price point unique to the subscription */
export interface SubscriptionCustomPrice {
  /** (Optional) */
  name?: string;
  /** (Optional) */
  handle?: string;
  /** Required if using `custom_price` attribute. */
  priceInCents: SubscriptionCustomPricePriceInCents;
  /** Required if using `custom_price` attribute. */
  interval: SubscriptionCustomPriceInterval;
  /** Required if using `custom_price` attribute. */
  intervalUnit: IntervalUnit;
  /** (Optional) */
  trialPriceInCents?: SubscriptionCustomPriceTrialPriceInCents;
  /** (Optional) */
  trialInterval?: SubscriptionCustomPriceTrialInterval;
  /** (Optional) */
  trialIntervalUnit?: IntervalUnit;
  /** (Optional) */
  initialChargeInCents?: SubscriptionCustomPriceInitialChargeInCents;
  /** (Optional) */
  initialChargeAfterTrial?: boolean;
  /** (Optional) */
  expirationInterval?: SubscriptionCustomPriceExpirationInterval;
  /** (Optional) */
  expirationIntervalUnit?: IntervalUnit;
  /** (Optional) */
  taxIncluded?: boolean;
}

export const subscriptionCustomPriceSchema: Schema<SubscriptionCustomPrice> = object(
  {
    name: ['name', optional(string())],
    handle: ['handle', optional(string())],
    priceInCents: ['price_in_cents', subscriptionCustomPricePriceInCentsSchema],
    interval: ['interval', subscriptionCustomPriceIntervalSchema],
    intervalUnit: ['interval_unit', intervalUnitSchema],
    trialPriceInCents: [
      'trial_price_in_cents',
      optional(subscriptionCustomPriceTrialPriceInCentsSchema),
    ],
    trialInterval: [
      'trial_interval',
      optional(subscriptionCustomPriceTrialIntervalSchema),
    ],
    trialIntervalUnit: ['trial_interval_unit', optional(intervalUnitSchema)],
    initialChargeInCents: [
      'initial_charge_in_cents',
      optional(subscriptionCustomPriceInitialChargeInCentsSchema),
    ],
    initialChargeAfterTrial: [
      'initial_charge_after_trial',
      optional(boolean()),
    ],
    expirationInterval: [
      'expiration_interval',
      optional(subscriptionCustomPriceExpirationIntervalSchema),
    ],
    expirationIntervalUnit: [
      'expiration_interval_unit',
      optional(intervalUnitSchema),
    ],
    taxIncluded: ['tax_included', optional(boolean())],
  }
);
