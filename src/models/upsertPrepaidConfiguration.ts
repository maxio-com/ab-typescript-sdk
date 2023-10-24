/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema } from '../schema';

export interface UpsertPrepaidConfiguration {
  initialFundingAmountInCents?: number;
  replenishToAmountInCents?: number;
  autoReplenish?: boolean;
  replenishThresholdAmountInCents?: number;
}

export const upsertPrepaidConfigurationSchema: Schema<UpsertPrepaidConfiguration> = object(
  {
    initialFundingAmountInCents: [
      'initial_funding_amount_in_cents',
      optional(number()),
    ],
    replenishToAmountInCents: [
      'replenish_to_amount_in_cents',
      optional(number()),
    ],
    autoReplenish: ['auto_replenish', optional(boolean())],
    replenishThresholdAmountInCents: [
      'replenish_threshold_amount_in_cents',
      optional(number()),
    ],
  }
);
