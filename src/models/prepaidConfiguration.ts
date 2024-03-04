/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  expandoObject,
  number,
  optional,
  Schema,
} from '../schema';

export interface PrepaidConfiguration {
  id?: number;
  initialFundingAmountInCents?: bigint;
  replenishToAmountInCents?: bigint;
  autoReplenish?: boolean;
  replenishThresholdAmountInCents?: bigint;
  [key: string]: unknown;
}

export const prepaidConfigurationSchema: Schema<PrepaidConfiguration> = expandoObject(
  {
    id: ['id', optional(number())],
    initialFundingAmountInCents: [
      'initial_funding_amount_in_cents',
      optional(bigint()),
    ],
    replenishToAmountInCents: [
      'replenish_to_amount_in_cents',
      optional(bigint()),
    ],
    autoReplenish: ['auto_replenish', optional(boolean())],
    replenishThresholdAmountInCents: [
      'replenish_threshold_amount_in_cents',
      optional(bigint()),
    ],
  }
);
