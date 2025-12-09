/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  lazy,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  SubscriptionCustomPriceExpirationInterval,
  subscriptionCustomPriceExpirationIntervalSchema,
} from './containers/subscriptionCustomPriceExpirationInterval.js';
import {
  SubscriptionCustomPriceInitialChargeInCents,
  subscriptionCustomPriceInitialChargeInCentsSchema,
} from './containers/subscriptionCustomPriceInitialChargeInCents.js';
import {
  SubscriptionCustomPriceInterval,
  subscriptionCustomPriceIntervalSchema,
} from './containers/subscriptionCustomPriceInterval.js';
import {
  SubscriptionCustomPricePriceInCents,
  subscriptionCustomPricePriceInCentsSchema,
} from './containers/subscriptionCustomPricePriceInCents.js';
import {
  SubscriptionCustomPriceTrialInterval,
  subscriptionCustomPriceTrialIntervalSchema,
} from './containers/subscriptionCustomPriceTrialInterval.js';
import {
  SubscriptionCustomPriceTrialPriceInCents,
  subscriptionCustomPriceTrialPriceInCentsSchema,
} from './containers/subscriptionCustomPriceTrialPriceInCents.js';
import {
  ExpirationIntervalUnit,
  expirationIntervalUnitSchema,
} from './expirationIntervalUnit.js';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit.js';
import { TrialType, trialTypeSchema } from './trialType.js';

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
  intervalUnit: IntervalUnit | null;
  /** (Optional) */
  trialPriceInCents?: SubscriptionCustomPriceTrialPriceInCents;
  /** (Optional) */
  trialInterval?: SubscriptionCustomPriceTrialInterval;
  /** (Optional) */
  trialIntervalUnit?: IntervalUnit;
  /** Indicates how a trial is handled when the trail period ends and there is no credit card on file. For `no_obligation`, the subscription transitions to a Trial Ended state. Maxio will not send any emails or statements. For `payment_expected`, the subscription transitions to a Past Due state. Maxio will send normal dunning emails and statements according to your other settings. */
  trialType?: TrialType | null;
  /** (Optional) */
  initialChargeInCents?: SubscriptionCustomPriceInitialChargeInCents;
  /** (Optional) */
  initialChargeAfterTrial?: boolean;
  /** (Optional) */
  expirationInterval?: SubscriptionCustomPriceExpirationInterval;
  /** (Optional) */
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  /** (Optional) */
  taxIncluded?: boolean;
  [key: string]: unknown;
}

export const subscriptionCustomPriceSchema: Schema<SubscriptionCustomPrice> = lazy(
  () =>
    expandoObject({
      name: ['name', optional(string())],
      handle: ['handle', optional(string())],
      priceInCents: [
        'price_in_cents',
        subscriptionCustomPricePriceInCentsSchema,
      ],
      interval: ['interval', subscriptionCustomPriceIntervalSchema],
      intervalUnit: ['interval_unit', nullable(intervalUnitSchema)],
      trialPriceInCents: [
        'trial_price_in_cents',
        optional(subscriptionCustomPriceTrialPriceInCentsSchema),
      ],
      trialInterval: [
        'trial_interval',
        optional(subscriptionCustomPriceTrialIntervalSchema),
      ],
      trialIntervalUnit: ['trial_interval_unit', optional(intervalUnitSchema)],
      trialType: ['trial_type', optional(nullable(trialTypeSchema))],
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
        optional(nullable(expirationIntervalUnitSchema)),
      ],
      taxIncluded: ['tax_included', optional(boolean())],
    })
);
