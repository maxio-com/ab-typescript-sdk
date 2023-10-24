/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import {
  CustomPriceUsedForSubscriptionCreateUpdateExpirationInterval,
  customPriceUsedForSubscriptionCreateUpdateExpirationIntervalSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateExpirationInterval';
import {
  CustomPriceUsedForSubscriptionCreateUpdateExpirationIntervalUnit,
  customPriceUsedForSubscriptionCreateUpdateExpirationIntervalUnitSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateExpirationIntervalUnit';
import {
  CustomPriceUsedForSubscriptionCreateUpdateInitialChargeInCents,
  customPriceUsedForSubscriptionCreateUpdateInitialChargeInCentsSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateInitialChargeInCents';
import {
  CustomPriceUsedForSubscriptionCreateUpdateInterval,
  customPriceUsedForSubscriptionCreateUpdateIntervalSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateInterval';
import {
  CustomPriceUsedForSubscriptionCreateUpdateIntervalUnit,
  customPriceUsedForSubscriptionCreateUpdateIntervalUnitSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateIntervalUnit';
import {
  CustomPriceUsedForSubscriptionCreateUpdatePriceInCents,
  customPriceUsedForSubscriptionCreateUpdatePriceInCentsSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdatePriceInCents';
import {
  CustomPriceUsedForSubscriptionCreateUpdateTrialInterval,
  customPriceUsedForSubscriptionCreateUpdateTrialIntervalSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateTrialInterval';
import {
  CustomPriceUsedForSubscriptionCreateUpdateTrialIntervalUnit,
  customPriceUsedForSubscriptionCreateUpdateTrialIntervalUnitSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateTrialIntervalUnit';
import {
  CustomPriceUsedForSubscriptionCreateUpdateTrialPriceInCents,
  customPriceUsedForSubscriptionCreateUpdateTrialPriceInCentsSchema,
} from './containers/customPriceUsedForSubscriptionCreateUpdateTrialPriceInCents';

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
  intervalUnit?: CustomPriceUsedForSubscriptionCreateUpdateIntervalUnit;
  /** (Optional) */
  trialPriceInCents?: CustomPriceUsedForSubscriptionCreateUpdateTrialPriceInCents;
  /** (Optional) */
  trialInterval?: CustomPriceUsedForSubscriptionCreateUpdateTrialInterval;
  /** (Optional) */
  trialIntervalUnit?: CustomPriceUsedForSubscriptionCreateUpdateTrialIntervalUnit;
  /** (Optional) */
  initialChargeInCents?: CustomPriceUsedForSubscriptionCreateUpdateInitialChargeInCents;
  /** (Optional) */
  initialChargeAfterTrial?: boolean;
  /** (Optional) */
  expirationInterval?: CustomPriceUsedForSubscriptionCreateUpdateExpirationInterval;
  /** (Optional) */
  expirationIntervalUnit?: CustomPriceUsedForSubscriptionCreateUpdateExpirationIntervalUnit;
  /** (Optional) */
  taxIncluded?: boolean;
}

export const customPriceUsedForSubscriptionCreateUpdateSchema: Schema<CustomPriceUsedForSubscriptionCreateUpdate> = object(
  {
    name: ['name', optional(string())],
    handle: ['handle', optional(string())],
    priceInCents: [
      'price_in_cents',
      optional(
        lazy(() => customPriceUsedForSubscriptionCreateUpdatePriceInCentsSchema)
      ),
    ],
    interval: [
      'interval',
      optional(
        lazy(() => customPriceUsedForSubscriptionCreateUpdateIntervalSchema)
      ),
    ],
    intervalUnit: [
      'interval_unit',
      optional(
        lazy(() => customPriceUsedForSubscriptionCreateUpdateIntervalUnitSchema)
      ),
    ],
    trialPriceInCents: [
      'trial_price_in_cents',
      optional(
        lazy(
          () =>
            customPriceUsedForSubscriptionCreateUpdateTrialPriceInCentsSchema
        )
      ),
    ],
    trialInterval: [
      'trial_interval',
      optional(
        lazy(
          () => customPriceUsedForSubscriptionCreateUpdateTrialIntervalSchema
        )
      ),
    ],
    trialIntervalUnit: [
      'trial_interval_unit',
      optional(
        lazy(
          () =>
            customPriceUsedForSubscriptionCreateUpdateTrialIntervalUnitSchema
        )
      ),
    ],
    initialChargeInCents: [
      'initial_charge_in_cents',
      optional(
        lazy(
          () =>
            customPriceUsedForSubscriptionCreateUpdateInitialChargeInCentsSchema
        )
      ),
    ],
    initialChargeAfterTrial: [
      'initial_charge_after_trial',
      optional(boolean()),
    ],
    expirationInterval: [
      'expiration_interval',
      optional(
        lazy(
          () =>
            customPriceUsedForSubscriptionCreateUpdateExpirationIntervalSchema
        )
      ),
    ],
    expirationIntervalUnit: [
      'expiration_interval_unit',
      optional(
        lazy(
          () =>
            customPriceUsedForSubscriptionCreateUpdateExpirationIntervalUnitSchema
        )
      ),
    ],
    taxIncluded: ['tax_included', optional(boolean())],
  }
);
