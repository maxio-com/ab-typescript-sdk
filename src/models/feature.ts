/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  EntitlementPeriodicityUnit,
  entitlementPeriodicityUnitSchema,
} from './entitlementPeriodicityUnit.js';
import { FeatureKind, featureKindSchema } from './featureKind.js';
import {
  FeatureValueType,
  featureValueTypeSchema,
} from './featureValueType.js';

export interface Feature {
  /** A unique, lowercase, underscore-separated identifier for the feature. Immutable once set. */
  key: string;
  /** The display name of the feature. */
  name: string;
  description?: string | null;
  /**
   * The behavior of a feature:
   * - `access_right`: a boolean entitlement. A subscriber either has access or does not.
   * - `usage_limit`: a quantified allowance measured over a recurring period (for example, "10,000 API calls per month").
   * - `service_right`: a free-form value (text, boolean, or number) that isn't a simple access flag or a metered limit.
   */
  kind: FeatureKind;
  /** Required when `kind` is `usage_limit`. */
  unit?: string | null;
  /** Required when `kind` is `service_right`. Ignored for other kinds, where it is inferred automatically. */
  valueType?: FeatureValueType;
  defaultValue?: string | null;
  /** Only valid when `kind` is `usage_limit`. */
  defaultPeriodicityInterval?: number | null;
  /** Only valid when `kind` is `usage_limit`. Must be set together with `default_periodicity_interval`. */
  defaultPeriodicityUnit?: EntitlementPeriodicityUnit | null;
  [key: string]: unknown;
}

export const featureSchema: Schema<Feature> = expandoObject({
  key: ['key', string()],
  name: ['name', string()],
  description: ['description', optional(nullable(string()))],
  kind: ['kind', featureKindSchema],
  unit: ['unit', optional(nullable(string()))],
  valueType: ['value_type', optional(featureValueTypeSchema)],
  defaultValue: ['default_value', optional(nullable(string()))],
  defaultPeriodicityInterval: [
    'default_periodicity_interval',
    optional(nullable(number())),
  ],
  defaultPeriodicityUnit: [
    'default_periodicity_unit',
    optional(nullable(entitlementPeriodicityUnitSchema)),
  ],
});
