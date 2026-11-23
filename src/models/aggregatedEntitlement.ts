/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  AggregatedEntitlementPeriodicity,
  aggregatedEntitlementPeriodicitySchema,
} from './aggregatedEntitlementPeriodicity.js';
import {
  AggregatedEntitlementValue,
  aggregatedEntitlementValueSchema,
} from './containers/aggregatedEntitlementValue.js';
import { FeatureKind, featureKindSchema } from './featureKind.js';

/** One entitlement in a subscriber's aggregated entitlements list. Entries are aggregated per feature key and periodicity window, not per feature key alone. A `usage_limit` feature granted with two different periodicities yields two entries sharing one `feature_key`. Use `periodicity_key` to identify an entry uniquely. */
export interface AggregatedEntitlement {
  /** The feature's key, prefixed by kind: `feature.*` for `access_right`, `usage.*` for `usage_limit`, `service.*` for `service_right`. */
  featureKey?: string;
  /** Uniquely identifies this aggregated entry: the prefixed feature key, suffixed with `:{interval}:{unit}` when the entitlement has a periodicity window. Equal to `feature_key` when `periodicity` is `null`. */
  periodicityKey?: string;
  name?: string;
  /**
   * The behavior of a feature:
   * - `access_right`: a boolean entitlement. A subscriber either has access or does not.
   * - `usage_limit`: a quantified allowance measured over a recurring period (for example, "10,000 API calls per month").
   * - `service_right`: a free-form value (text, boolean, or number) that isn't a simple access flag or a metered limit.
   */
  type?: FeatureKind;
  /** The aggregated value, coerced according to `type`: a boolean for `access_right` (and boolean `service_right`), a number for `usage_limit` (and numeric `service_right`), or a string for text `service_right`. */
  value?: AggregatedEntitlementValue;
  /** `true` only when the aggregated value is truthy for this feature's kind, and the subscription is in a live state (`active`, `trialing`, `assessing`, `past_due`, or `soft_failure`). `false` otherwise, including for `awaiting_signup`, canceled, expired, and on-hold subscriptions. Entitlements deliberately stay enabled through dunning. */
  enabled?: boolean;
  periodicity?: AggregatedEntitlementPeriodicity | null;
  /** The names of the products/components contributing to this entitlement. For `access_right` features, only contributors that granted `true` are listed. */
  sourceProducts?: string[];
  [key: string]: unknown;
}

export const aggregatedEntitlementSchema: Schema<AggregatedEntitlement> = lazy(
  () =>
    expandoObject({
      featureKey: ['feature_key', optional(string())],
      periodicityKey: ['periodicity_key', optional(string())],
      name: ['name', optional(string())],
      type: ['type', optional(featureKindSchema)],
      value: ['value', optional(aggregatedEntitlementValueSchema)],
      enabled: ['enabled', optional(boolean())],
      periodicity: [
        'periodicity',
        optional(nullable(aggregatedEntitlementPeriodicitySchema)),
      ],
      sourceProducts: ['source_products', optional(array(string()))],
    })
);
