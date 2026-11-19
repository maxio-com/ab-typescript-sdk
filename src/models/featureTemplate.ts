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

/** A feature that can be granted to subscribers, defined once at the site level and then attached to products or components. */
export interface FeatureTemplate {
  /** The Advanced Billing id of the feature template. */
  id?: number;
  /** A unique, lowercase, underscore-separated identifier for the feature. Immutable once set. */
  key?: string;
  /** The display name of the feature. */
  name?: string;
  description?: string | null;
  /**
   * The behavior of a feature:
   * - `access_right`: a boolean entitlement. A subscriber either has access or does not.
   * - `usage_limit`: a quantified allowance measured over a recurring period (for example, "10,000 API calls per month").
   * - `service_right`: a free-form value (text, boolean, or number) that isn't a simple access flag or a metered limit.
   */
  kind?: FeatureKind;
  /** The unit the feature is measured in (for example, `requests` or `GB`). Required when `kind` is `usage_limit`. */
  unit?: string | null;
  /** The data type of a feature's value. For `access_right` features this is always `boolean`, and for `usage_limit` features this is always `numeric`. For `service_right` features, you choose the value type explicitly. */
  valueType?: FeatureValueType;
  /** A default value used to pre-populate new feature catalog items created from this template. */
  defaultValue?: string | null;
  /** For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. Always `null` for other kinds. */
  defaultPeriodicityInterval?: number | null;
  /** For `usage_limit` features, the default periodicity unit used to pre-populate new feature catalog items. Always `null` for other kinds. */
  defaultPeriodicityUnit?: EntitlementPeriodicityUnit | null;
  /** The date and time the feature template was archived, or `null` if it is active. */
  archivedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
  /** The number of **components** this feature template is currently attached to via an active feature catalog item. Despite the name, this counts components, not products. In the Advanced Billing UI, components are labeled "Products." */
  productsCount?: number;
  /** The number of **products** this feature template is currently attached to via an active feature catalog item. Despite the name, this counts products, not plans. In the Advanced Billing UI, products are labeled "Plans." */
  plansCount?: number;
  [key: string]: unknown;
}

export const featureTemplateSchema: Schema<FeatureTemplate> = expandoObject({
  id: ['id', optional(number())],
  key: ['key', optional(string())],
  name: ['name', optional(string())],
  description: ['description', optional(nullable(string()))],
  kind: ['kind', optional(featureKindSchema)],
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
  archivedAt: ['archived_at', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  productsCount: ['products_count', optional(number())],
  plansCount: ['plans_count', optional(number())],
});
