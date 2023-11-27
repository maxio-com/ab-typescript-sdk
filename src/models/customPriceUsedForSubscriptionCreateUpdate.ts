/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';
import {
  CustomPriceUsedForSubscriptionCreateUpdateExpirationInterval,
  customPriceUsedForSubscriptionCreateUpdateExpirationIntervalSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateExpirationInterval';
import {
  CustomPriceUsedForSubscriptionCreateUpdateInitialChargeInCents,
  customPriceUsedForSubscriptionCreateUpdateInitialChargeInCentsSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateInitialChargeInCents';
import {
  CustomPriceUsedForSubscriptionCreateUpdateInterval,
  customPriceUsedForSubscriptionCreateUpdateIntervalSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateInterval';
import {
  CustomPriceUsedForSubscriptionCreateUpdatePriceInCents,
  customPriceUsedForSubscriptionCreateUpdatePriceInCentsSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdatePriceInCents';
import {
  CustomPriceUsedForSubscriptionCreateUpdateTrialInterval,
  customPriceUsedForSubscriptionCreateUpdateTrialIntervalSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateTrialInterval';
import {
  CustomPriceUsedForSubscriptionCreateUpdateTrialPriceInCents,
  customPriceUsedForSubscriptionCreateUpdateTrialPriceInCentsSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateTrialPriceInCents';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';

/** (Optional) Used in place of `product_price_point_id` to define a custom price point unique to the subscription */
export interface CustomPriceUsedForSubscriptionCreateUpdate {
  /** (Optional) */
  name?: string;
  /** (Optional) */
  handle?: string;
  /** Required if using `custom_price` attribute. */
  priceInCents?: CustomPriceUsedForSubscriptionCreateUpdatePriceInCents;
  /** Required if using `custom_price` attribute. */
  interval?: CustomPriceUsedForSubscriptionCreateUpdateInterval;
  /** Required if using `custom_price` attribute. */
  intervalUnit?: IntervalUnit;
  /** (Optional) */
  trialPriceInCents?: CustomPriceUsedForSubscriptionCreateUpdateTrialPriceInCents;
  /** (Optional) */
  trialInterval?: CustomPriceUsedForSubscriptionCreateUpdateTrialInterval;
  /** (Optional) */
  trialIntervalUnit?: IntervalUnit;
  /** (Optional) */
  initialChargeInCents?: CustomPriceUsedForSubscriptionCreateUpdateInitialChargeInCents;
  /** (Optional) */
  initialChargeAfterTrial?: boolean;
  /** (Optional) */
  expirationInterval?: CustomPriceUsedForSubscriptionCreateUpdateExpirationInterval;
  /** (Optional) */
  expirationIntervalUnit?: IntervalUnit;
  /** (Optional) */
  taxIncluded?: boolean;
}

export const customPriceUsedForSubscriptionCreateUpdateSchema: Schema<CustomPriceUsedForSubscriptionCreateUpdate> = object(
  {
    name: ['name', optional(string())],
    handle: ['handle', optional(string())],
    priceInCents: [
      'price_in_cents',
      optional(customPriceUsedForSubscriptionCreateUpdatePriceInCentsSchema),
    ],
    interval: [
      'interval',
      optional(customPriceUsedForSubscriptionCreateUpdateIntervalSchema),
    ],
    intervalUnit: ['interval_unit', optional(intervalUnitSchema)],
    trialPriceInCents: [
      'trial_price_in_cents',
      optional(
        customPriceUsedForSubscriptionCreateUpdateTrialPriceInCentsSchema
      ),
    ],
    trialInterval: [
      'trial_interval',
      optional(customPriceUsedForSubscriptionCreateUpdateTrialIntervalSchema),
    ],
    trialIntervalUnit: ['trial_interval_unit', optional(intervalUnitSchema)],
    initialChargeInCents: [
      'initial_charge_in_cents',
      optional(
        customPriceUsedForSubscriptionCreateUpdateInitialChargeInCentsSchema
      ),
    ],
    initialChargeAfterTrial: [
      'initial_charge_after_trial',
      optional(boolean()),
    ],
    expirationInterval: [
      'expiration_interval',
      optional(
        customPriceUsedForSubscriptionCreateUpdateExpirationIntervalSchema
      ),
    ],
    expirationIntervalUnit: [
      'expiration_interval_unit',
      optional(intervalUnitSchema),
    ],
    taxIncluded: ['tax_included', optional(boolean())],
  }
);
